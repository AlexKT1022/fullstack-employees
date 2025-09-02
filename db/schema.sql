drop table if exists employees;

create table employees (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  birthday DATE NOT NULL,
  salary INTEGER NOT NULL
)
