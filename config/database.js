import sequelize from 'sequelize'


const db = new sequelize('mern_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


export default db;
