-- Mewnion Extended Database Schema
-- 새로운 기능들을 위한 확장 스키마

-- ============================================
-- 1. Storage Buckets 설정
-- ============================================

-- avatars 버킷 생성 (프로필 이미지)
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

-- Storage RLS 정책
create policy "Avatar images are publicly accessible"
  on storage.objects for select
  using (bucket_id = 'avatars');

create policy "Users can upload their own avatar"
  on storage.objects for insert
  with check (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Users can update their own avatar"
  on storage.objects for update
  using (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Users can delete their own avatar"
  on storage.objects for delete
  using (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- ============================================
-- 2. Friends System (친구 시스템)
-- ============================================

-- friendships 테이블
create table if not exists public.friendships (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  friend_id uuid references public.profiles(id) on delete cascade not null,
  status text not null default 'pending', -- pending, accepted, blocked
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,

  -- 제약조건
  constraint different_users check (user_id != friend_id),
  constraint valid_status check (status in ('pending', 'accepted', 'blocked')),
  constraint unique_friendship unique (user_id, friend_id)
);

-- RLS 활성화
alter table public.friendships enable row level security;

-- Friendships 정책
create policy "Users can view their friendships"
  on public.friendships for select
  using (auth.uid() = user_id or auth.uid() = friend_id);

create policy "Users can create friendship requests"
  on public.friendships for insert
  with check (auth.uid() = user_id);

create policy "Users can update friendships they're part of"
  on public.friendships for update
  using (auth.uid() = user_id or auth.uid() = friend_id);

create policy "Users can delete their friendships"
  on public.friendships for delete
  using (auth.uid() = user_id or auth.uid() = friend_id);

-- Indexes
create index friendships_user_id_idx on public.friendships(user_id);
create index friendships_friend_id_idx on public.friendships(friend_id);
create index friendships_status_idx on public.friendships(status);

-- ============================================
-- 3. Messages System (채팅 시스템)
-- ============================================

-- messages 테이블
create table if not exists public.messages (
  id uuid default gen_random_uuid() primary key,
  sender_id uuid references public.profiles(id) on delete cascade not null,
  recipient_id uuid references public.profiles(id) on delete cascade not null,
  content text not null,
  read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,

  -- 제약조건
  constraint different_users check (sender_id != recipient_id),
  constraint content_length check (char_length(content) <= 2000)
);

-- RLS 활성화
alter table public.messages enable row level security;

-- Messages 정책
create policy "Users can view messages they sent or received"
  on public.messages for select
  using (auth.uid() = sender_id or auth.uid() = recipient_id);

create policy "Users can send messages"
  on public.messages for insert
  with check (auth.uid() = sender_id);

create policy "Recipients can mark messages as read"
  on public.messages for update
  using (auth.uid() = recipient_id);

create policy "Users can delete their own messages"
  on public.messages for delete
  using (auth.uid() = sender_id);

-- Indexes
create index messages_sender_id_idx on public.messages(sender_id);
create index messages_recipient_id_idx on public.messages(recipient_id);
create index messages_created_at_idx on public.messages(created_at desc);
create index messages_read_idx on public.messages(read);

-- ============================================
-- 4. Notifications System (알림 시스템)
-- ============================================

-- notifications 테이블
create table if not exists public.notifications (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  type text not null, -- visitor, friend_request, message, system
  title text not null,
  content text,
  link text,
  read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,

  -- 제약조건
  constraint valid_notification_type check (type in ('visitor', 'friend_request', 'message', 'system', 'achievement'))
);

-- RLS 활성화
alter table public.notifications enable row level security;

-- Notifications 정책
create policy "Users can view their own notifications"
  on public.notifications for select
  using (auth.uid() = user_id);

create policy "System can create notifications"
  on public.notifications for insert
  with check (true); -- 시스템에서 생성

create policy "Users can update their own notifications"
  on public.notifications for update
  using (auth.uid() = user_id);

create policy "Users can delete their own notifications"
  on public.notifications for delete
  using (auth.uid() = user_id);

-- Indexes
create index notifications_user_id_idx on public.notifications(user_id);
create index notifications_read_idx on public.notifications(read);
create index notifications_created_at_idx on public.notifications(created_at desc);

-- ============================================
-- 5. Presence System (실시간 온라인 상태)
-- ============================================

-- user_presence 테이블
create table if not exists public.user_presence (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  online boolean default false,
  last_seen timestamp with time zone default timezone('utc'::text, now()) not null,
  current_page text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS 활성화
alter table public.user_presence enable row level security;

-- Presence 정책
create policy "Everyone can view user presence"
  on public.user_presence for select
  using (true);

create policy "Users can upsert their own presence"
  on public.user_presence for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own presence"
  on public.user_presence for update
  using (auth.uid() = user_id);

-- Index
create index user_presence_online_idx on public.user_presence(online);

-- ============================================
-- 6. Functions & Triggers
-- ============================================

-- Trigger: friendships updated_at
create trigger on_friendships_updated
  before update on public.friendships
  for each row execute procedure public.handle_updated_at();

-- Trigger: messages updated_at
create trigger on_messages_updated
  before update on public.messages
  for each row execute procedure public.handle_updated_at();

-- Trigger: user_presence updated_at
create trigger on_user_presence_updated
  before update on public.user_presence
  for each row execute procedure public.handle_updated_at();

-- Function: 방문자 알림 생성
create or replace function public.create_visitor_notification()
returns trigger as $$
begin
  -- 본인 방문은 알림 생성하지 않음
  if new.visited_user_id != new.visitor_user_id then
    insert into public.notifications (user_id, type, title, content, link)
    select
      new.visited_user_id,
      'visitor',
      p.username || '님이 방문했어요',
      '새로운 방문자가 캣룸에 들렀습니다.',
      '/' || p.username
    from public.profiles p
    where p.id = new.visitor_user_id;
  end if;

  return new;
end;
$$ language plpgsql security definer;

-- Trigger: 방문 시 알림 자동 생성
create trigger on_visitor_create_notification
  after insert on public.visitors
  for each row execute procedure public.create_visitor_notification();

-- Function: 친구 요청 알림 생성
create or replace function public.create_friend_request_notification()
returns trigger as $$
begin
  if new.status = 'pending' then
    insert into public.notifications (user_id, type, title, content, link)
    select
      new.friend_id,
      'friend_request',
      p.username || '님의 친구 요청',
      '새로운 친구 요청이 도착했습니다.',
      '/mypage'
    from public.profiles p
    where p.id = new.user_id;
  end if;

  return new;
end;
$$ language plpgsql security definer;

-- Trigger: 친구 요청 시 알림 자동 생성
create trigger on_friendship_create_notification
  after insert on public.friendships
  for each row execute procedure public.create_friend_request_notification();

-- Function: 메시지 알림 생성
create or replace function public.create_message_notification()
returns trigger as $$
begin
  insert into public.notifications (user_id, type, title, content, link)
  select
    new.recipient_id,
    'message',
    p.username || '님의 메시지',
    substring(new.content, 1, 50) || case when length(new.content) > 50 then '...' else '' end,
    '/mypage'
  from public.profiles p
  where p.id = new.sender_id;

  return new;
end;
$$ language plpgsql security definer;

-- Trigger: 메시지 발송 시 알림 자동 생성
create trigger on_message_create_notification
  after insert on public.messages
  for each row execute procedure public.create_message_notification();

-- ============================================
-- 7. Helper Functions
-- ============================================

-- Function: 읽지 않은 알림 개수
create or replace function public.get_unread_notification_count(target_user_id uuid)
returns integer as $$
  select count(*)::integer
  from public.notifications
  where user_id = target_user_id and read = false;
$$ language sql security definer;

-- Function: 읽지 않은 메시지 개수
create or replace function public.get_unread_message_count(target_user_id uuid)
returns integer as $$
  select count(*)::integer
  from public.messages
  where recipient_id = target_user_id and read = false;
$$ language sql security definer;

-- Function: 친구 목록 조회
create or replace function public.get_friends(target_user_id uuid)
returns table (
  friend_id uuid,
  username text,
  avatar_url text,
  online boolean,
  last_seen timestamp with time zone
) as $$
  select
    p.id,
    p.username,
    p.avatar_url,
    coalesce(up.online, false) as online,
    up.last_seen
  from public.friendships f
  join public.profiles p on (
    case
      when f.user_id = target_user_id then p.id = f.friend_id
      when f.friend_id = target_user_id then p.id = f.user_id
    end
  )
  left join public.user_presence up on up.user_id = p.id
  where f.status = 'accepted'
    and (f.user_id = target_user_id or f.friend_id = target_user_id);
$$ language sql security definer;

-- ============================================
-- 8. Realtime Publications
-- ============================================

-- Realtime를 위한 Publication 설정 (Supabase Dashboard에서도 설정 가능)
-- alter publication supabase_realtime add table public.messages;
-- alter publication supabase_realtime add table public.notifications;
-- alter publication supabase_realtime add table public.user_presence;
-- alter publication supabase_realtime add table public.visitors;

-- ============================================
-- 완료!
-- ============================================

-- 확인용 쿼리
select 'Extended schema created successfully!' as status;
