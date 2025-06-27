drop table if exists tasks;

create table tasks (
    task_id bigint primary key generated always as identity not null,
    name text not null,
    status current_status default 'in-progress' not null,
    description text,
    due_date date default null,
    project_id bigint references projects(project_id) default null,
    collaborators text array default array[]::varchar[] not null
);