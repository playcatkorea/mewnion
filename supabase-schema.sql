-- Supabase Database Schema for Mewnion

-- Profiles 테이블 생성
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  email text not null,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,

  -- username 제약조건
  constraint username_length check (char_length(username) >= 3),
  constraint username_format check (username ~ '^[a-zA-Z0-9_]+$')
);

-- RLS (Row Level Security) 활성화
alter table public.profiles enable row level security;

-- 프로필 조회 정책 (모두 가능)
create policy "Profiles are viewable by everyone"
  on public.profiles for select
  using (true);

-- 프로필 생성 정책 (인증된 사용자만)
create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- 프로필 업데이트 정책 (본인만)
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- User Settings 테이블 (게임 데이터)
create table if not exists public.user_settings (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  coins numeric default 0,
  total_activity integer default 0,
  mining_rate numeric default 1.0,
  room_data jsonb default '{}'::jsonb,
  furniture jsonb default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS 활성화
alter table public.user_settings enable row level security;

-- 설정 조회 정책 (본인만)
create policy "Users can view own settings"
  on public.user_settings for select
  using (auth.uid() = user_id);

-- 설정 생성 정책 (본인만)
create policy "Users can insert own settings"
  on public.user_settings for insert
  with check (auth.uid() = user_id);

-- 설정 업데이트 정책 (본인만)
create policy "Users can update own settings"
  on public.user_settings for update
  using (auth.uid() = user_id);

-- Visitors 테이블 (방문 기록)
create table if not exists public.visitors (
  id uuid default gen_random_uuid() primary key,
  visited_user_id uuid references public.profiles(id) on delete cascade not null,
  visitor_user_id uuid references public.profiles(id) on delete cascade not null,
  visited_at timestamp with time zone default timezone('utc'::text, now()) not null,

  -- 같은 유저가 같은 시간대에 중복 방문 방지
  constraint unique_visit unique (visited_user_id, visitor_user_id, visited_at)
);

-- RLS 활성화
alter table public.visitors enable row level security;

-- 방문 기록 조회 정책 (본인 관련 기록만)
create policy "Users can view their visitor records"
  on public.visitors for select
  using (auth.uid() = visited_user_id or auth.uid() = visitor_user_id);

-- 방문 기록 생성 정책 (인증된 사용자)
create policy "Users can insert visitor records"
  on public.visitors for insert
  with check (auth.uid() = visitor_user_id);

-- Functions: 자동 updated_at 업데이트
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql security definer;

-- Triggers
create trigger on_profiles_updated
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

create trigger on_user_settings_updated
  before update on public.user_settings
  for each row execute procedure public.handle_updated_at();

-- Functions: 새 유저 프로필 자동 생성
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;

  return new;
end;
$$ language plpgsql security definer;

-- Trigger: auth.users에 새 유저 생성 시 프로필 자동 생성
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Indexes for better performance
create index if not exists profiles_username_idx on public.profiles(username);
create index if not exists visitors_visited_user_id_idx on public.visitors(visited_user_id);
create index if not exists visitors_visitor_user_id_idx on public.visitors(visitor_user_id);
create index if not exists visitors_visited_at_idx on public.visitors(visited_at desc);
