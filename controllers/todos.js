import Todos from "../models/todo.js";



export const getAlltodos = async (req, res) => {
    try {
        const todo = await Todos.findAll();
        res.send(todo)
    } catch (error) {
        console.log(error)
    }
}


export const getTodoById = async (req, res) => {
    try {
        const todo = await Todos.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(todo[0])
    } catch (error) {
        console.log(error)
    }
}




export const createTodo = async (req, res) => {
    try {
        await Todos.create(req.body);
        res.json({
            "message": "todo is created .. !"
        })
    } catch (error) {
        console.log(error)
    }
}


export const updateTodo = async (req, res) => {
    try {
        await Todos.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "todo is updated .. !"
        })
    } catch (error) {
        console.log(error)
    }
}



export const deleteTodo = async (req, res) => {
    try {
        await Todos.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "todo is deleted .. !"
        })
    } catch (error) {
        console.log(error)
    }
}