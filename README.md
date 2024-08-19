# Локальный сервер и БД
* Открываем терминал в среде разработки
* Прописываем в терминале:
*   npm init -y 
*   npm install express pg
*   npm install sequelize
*   npm install pg pg-hstore

* создать в корне проекта файл .env =>(
  DATABASE_URL = 'postgres://postgres:somepasswor@localhost:5432/somedatabase'
# psomepassword  пароль  заданный в postgreSQL
# somedatabase  название созданной БД
  )

* установить postgreSQL
* войти в папку postgreSQL папку .bin
* открыть PowerShell
* PS C:\Program Files\PostgreSQL\16\bin> .\psql -U postgres
* Пароль пользователя postgres:(пароль от postgres в db.js файле)
* postgres=# create database somedatabase;
* postgres=# \l
* postgres=# \connect somedatabase; 
* somedatabase=# \dt
# запускаем сервер в терминале : node index.js
* Прописываем в браузере:  'http://localhost:8080/index.html'
 


#  На удаленном сервере  Render.com

# ссылка на  приложение развернутое на сервере  Render.com https://note-test-on-node.onrender.com
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
