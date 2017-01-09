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
name        | string    |
description | string    |
price       | integer   |
skill       | string    |
location    | string    |

##reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tasker_id   | string    |
reviewer    | string    |
comment     | string    |

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tasker_id   | integer   | not null, foreign key (references takers), indexed
user_id     | string    | not null, foreign key (references users), indexed
description | string    |
date        | date      |
