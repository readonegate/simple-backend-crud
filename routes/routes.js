import express from 'express'
import {
    getAlltodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo

} from '../controllers/todos.js';



const Route = express.Router()


Route.get('/todos', getAlltodos)
Route.get('/todos/:id', getTodoById)
Route.post('/todos', createTodo)
Route.put('/todos/:id', updateTodo)
Route.delete('/todos/:id', deleteTodo)




export default Route;