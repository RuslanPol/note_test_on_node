
const { Sequelize,Datatypes} =require('sequelize')
// require('dotenv').config()

const sequelize = new Sequelize(  process.env.DATABASE_URL,{
    dialect: 'postgres'
});
// const run = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Соединение с базой данных успешно установлено.');
//
//         await sequelize.sync({ force: true });
//         console.log('Таблица создана!');
//
//     } catch (error) {
//         console.error('Не удалось создать таблицу:', error);
//     }finally {
//         await sequelize.close();
//     }
// };


module.exports = sequelize