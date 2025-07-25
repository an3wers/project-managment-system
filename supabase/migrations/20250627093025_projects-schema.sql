drop table if exists projects;

drop type if exists current_status;
create type current_status as enum ('in-progress', 'completed', 'cancelled');

create table projects(
    project_id bigint primary key generated always as identity not null,
    created_at timestamptz default now() not null,
    name text not null,
    slug text not null,
    description text not null,
    status current_status default 'in-progress' not null,
    collaborators text array default array[]::varchar[] not null
);