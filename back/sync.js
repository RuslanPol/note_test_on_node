const db = require("./db");
const run = async () => {
    try {
        await db.authenticate();
        console.log('Соединение с базой данных успешно установлено.');

        await db.sync({ force: true });
        console.log('Таблица создана!');

    } catch (error) {
        console.error('Не удалось создать таблицу:', error);
      }finally {
       await db.close();
      }
};
module.exports = run;