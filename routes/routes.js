import express from 'express'
import {
    getAlltodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo

} from '../controllers/todos.js';
import { getAllqueue, getQueueById, createQueue, updateQueue, deleteQueue, getFirstqueue,resetAllqueue } from '../controllers/queue.js';



const Route = express.Router()


// Route.get('/todos', getAlltodos)
// Route.get('/todos/:id', getTodoById)
// Route.post('/todos', createTodo)
// Route.put('/todos/:id', updateTodo)
// Route.delete('/todos/:id', deleteTodo)


Route.get('/queue', getAllqueue)
Route.get('/queue/:id', getQueueById)
Route.post('/queue', createQueue)
Route.put('/queue/:id', updateQueue)
Route.delete('/queue/:id', deleteQueue)
Route.get('/fqueue', getFirstqueue)
Route.delete('/resetqueue', resetAllqueue)




export default Route;