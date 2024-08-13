загрузить postgreSQL
зайти в postgreSQL
зайти в  папку .bin
открыть PowerShell
PS C:\Program Files\PostgreSQL\16\bin> .\psql -U postgres
Пароль пользователя postgres:(пароль от postgres в db.js файле)
postgres=# create database notes_db;
postgres=# \l
postgres=# \connect notes_db;
notes_db=# \dt
notes_db=#  сюда копируется  файл database.sql
notes_db=# select * from notes;



