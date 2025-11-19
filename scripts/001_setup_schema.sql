-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create profiles table
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on profiles
alter table public.profiles enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone."
  on public.profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on public.profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on public.profiles for update
  using ( auth.uid() = id );

-- Create user_progress table
create table if not exists public.user_progress (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  day_id text not null, -- e.g., "m1-w1-d1"
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, day_id)
);

-- Enable RLS on user_progress
alter table public.user_progress enable row level security;

-- User progress policies
create policy "Users can view own progress."
  on public.user_progress for select
  using ( auth.uid() = user_id );

create policy "Users can insert own progress."
  on public.user_progress for insert
  with check ( auth.uid() = user_id );

create policy "Users can update own progress."
  on public.user_progress for update
  using ( auth.uid() = user_id );

-- Create submissions table
create table if not exists public.submissions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  day_id text not null,
  content text, -- code or text answer
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on submissions
alter table public.submissions enable row level security;

-- Submissions policies
create policy "Users can view own submissions."
  on public.submissions for select
  using ( auth.uid() = user_id );

create policy "Users can insert own submissions."
  on public.submissions for insert
  with check ( auth.uid() = user_id );

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$;

-- Trigger for new user signup
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
