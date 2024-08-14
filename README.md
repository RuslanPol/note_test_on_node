# Локальный сервер и БД
1. загрузить postgreSQL
2. войти в postgreSQL
3. войти в  папку .bin
4. открыть PowerShell
5. PS C:\Program Files\PostgreSQL\16\bin> .\psql -U postgres
6. Пароль пользователя postgres:(пароль от postgres в db.js файле)
7. postgres=# create database notes_db;
8. postgres=# \l
9. postgres=# \connect notes_db;
10. notes_db=# \dt
11. В файлах app.js и note.js  /front/public  в fetch запросах
прописать  вместо '/api/notes' полный адрес:
  'http://localhost:8080/api/notes'


#  На Render.com
https://note-test-on-node.onrender.com
*  Шаг 1: Создание аккаунта на Render.com  
Зарегистрируйтесь на Render.com, если у вас еще нет аккаунта.

* Шаг 2: Создание нового сервера
1. На панели управления нажмите на кнопку "New" и выберите "Web Service".
2. Выберите репозиторий с вашим кодом. Render поддерживает GitHub и GitLab.

* Шаг 3: Настройка сервера
1. Выберите ветку для развертывания.
2. Укажите язык программирования и необходимые настройки сборки.
3. Нажмите "Create Web Service".

* Шаг 4: Создание базы данных PostgreSQL
1. На главной панели выберите "New" и затем "PostgreSQL".
2. Укажите имя базы данных, настройки региона и другие параметры.
3. Нажмите "Create PostgreSQL Database".
4.  Скопируйте строку подключения (connection string) к вашей базе данных.

* Шаг 5: Подключение сервера к базе данных
1. В конфигурации вашего сервера добавьте переменную окружения, назвав её, например, DATABASE_URL, и вставьте строку подключения.
