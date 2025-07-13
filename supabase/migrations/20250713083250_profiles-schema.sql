drop table if exists profiles;

truncate auth.users cascade;

create table profiles (
    id uuid references auth.users(id) on delete cascade not null primary key,
    username text unique not null,
    full_name text,
    bio text,
    mode text default 'dark' not null,
    avatar_url text,
    created_at timestamp with time zone default now() not null,
    updated_at timestamp with time zone default now() not null
);