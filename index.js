import express from 'express'
import db from './config/database.js'
import Route from './routes/routes.js'
import cors from 'cors'




const PORT = "5000"
const app = express()



app.use(express.json())
app.use(Route)
app.use(cors())




try {
    db.authenticate()
    console.log('database is connected... !')
} catch (error) {
    console.log(error)
}


app.listen(PORT, console.log('server is running .. !'))