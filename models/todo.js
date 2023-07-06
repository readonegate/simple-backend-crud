import sequelize from 'sequelize'
import db from '../config/database.js'




const { DataTypes } = sequelize

const Todos = db.define('todos', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    FreezeTableName: true
})


export default Todos;