# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## taskers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | string    | not null
rate        | integer   | not null
skill       | string    | not null
location    | string    | not null

##reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tasker_id   | string    | not null
reviewer    | string    | not null
comment     | string    | not null

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tasker_id   | integer   | not null, foreign key (references taskers), indexed
user_id     | string    | not null, foreign key (references users), indexed
description | string    | not null
date        | date      | not null
