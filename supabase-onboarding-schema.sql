-- 온보딩 관련 데이터베이스 스키마 확장

-- profiles 테이블에 추가 필드
alter table public.profiles
  add column if not exists display_name text,
  add column if not exists bio text,
  add column if not exists gender text check (gender in ('male', 'female', 'other', 'prefer_not_to_say')),
  add column if not exists birth_date date,
  add column if not exists phone text,
  add column if not exists onboarding_completed boolean default false;

-- cats 테이블 생성 (고양이 정보)
create table if not exists public.cats (
  id uuid default gen_random_uuid() primary key,
  owner_id uuid references public.profiles(id) on delete cascade not null,
  name text not null,
  breed text,
  gender text check (gender in ('male', 'female', 'unknown')),
  birth_date date,
  adoption_date date,
  weight numeric,
  photo_url text,
  bio text,
  microchip_id text,
  is_primary boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,

  constraint cat_name_length check (char_length(name) >= 1 and char_length(name) <= 50)
);

-- RLS 활성화
alter table public.cats enable row level security;

-- 고양이 정보 조회 정책 (모두 가능)
create policy "Cats are viewable by everyone"
  on public.cats for select
  using (true);

-- 고양이 정보 생성 정책 (본인만)
create policy "Users can insert their own cats"
  on public.cats for insert
  with check (auth.uid() = owner_id);

-- 고양이 정보 업데이트 정책 (본인만)
create policy "Users can update own cats"
  on public.cats for update
  using (auth.uid() = owner_id);

-- 고양이 정보 삭제 정책 (본인만)
create policy "Users can delete own cats"
  on public.cats for delete
  using (auth.uid() = owner_id);

-- user_preferences 테이블 생성 (서비스 선호도)
create table if not exists public.user_preferences (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  email_notifications boolean default true,
  push_notifications boolean default true,
  marketing_emails boolean default false,
  interests jsonb default '[]'::jsonb,
  theme text default 'retro' check (theme in ('retro', 'modern', 'dark')),
  language text default 'ko' check (language in ('ko', 'en')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS 활성화
alter table public.user_preferences enable row level security;

-- 선호도 조회 정책 (본인만)
create policy "Users can view own preferences"
  on public.user_preferences for select
  using (auth.uid() = user_id);

-- 선호도 생성 정책 (본인만)
create policy "Users can insert own preferences"
  on public.user_preferences for insert
  with check (auth.uid() = user_id);

-- 선호도 업데이트 정책 (본인만)
create policy "Users can update own preferences"
  on public.user_preferences for update
  using (auth.uid() = user_id);

-- Triggers for updated_at
create trigger on_cats_updated
  before update on public.cats
  for each row execute procedure public.handle_updated_at();

create trigger on_user_preferences_updated
  before update on public.user_preferences
  for each row execute procedure public.handle_updated_at();

-- Indexes
create index if not exists cats_owner_id_idx on public.cats(owner_id);
create index if not exists cats_is_primary_idx on public.cats(owner_id, is_primary);
create index if not exists profiles_onboarding_completed_idx on public.profiles(onboarding_completed);

-- Function: 첫 번째 고양이를 자동으로 primary로 설정
create or replace function public.set_first_cat_as_primary()
returns trigger as $$
begin
  -- 이 소유자의 다른 고양이가 없으면 primary로 설정
  if not exists (
    select 1 from public.cats
    where owner_id = new.owner_id and id != new.id
  ) then
    new.is_primary = true;
  end if;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_first_cat_created
  before insert on public.cats
  for each row execute procedure public.set_first_cat_as_primary();

-- Function: primary 고양이 변경 시 다른 고양이들의 primary 해제
create or replace function public.ensure_single_primary_cat()
returns trigger as $$
begin
  if new.is_primary = true then
    update public.cats
    set is_primary = false
    where owner_id = new.owner_id and id != new.id and is_primary = true;
  end if;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_cat_primary_changed
  before update on public.cats
  for each row execute procedure public.ensure_single_primary_cat();

-- 코멘트 추가
comment on table public.cats is '사용자의 반려묘 정보를 저장하는 테이블';
comment on table public.user_preferences is '사용자의 서비스 선호도 설정을 저장하는 테이블';
comment on column public.profiles.onboarding_completed is '온보딩 프로세스 완료 여부';
