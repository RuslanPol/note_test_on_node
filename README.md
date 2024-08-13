загрузить postgreSQL
зайти в postgreSQL
зайти в  папку .bin
открыть PowerShell
PS C:\Program Files\PostgreSQL\16\bin> .\psql -U postgres
Пароль пользователя postgres:
postgres=# \connect notes_db;
postgres=# select * from notes;
postgres=# \connect notes_db;


