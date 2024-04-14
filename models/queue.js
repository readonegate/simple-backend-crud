import sequelize from 'sequelize'
import db from '../config/database.js'




const { DataTypes } = sequelize

const Queues = db.define('queue', {
    queue: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'queue'
})


export default Queues;