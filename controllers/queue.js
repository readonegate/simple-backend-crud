import Queues from "../models/queue.js";



export const getAllqueue = async (req, res) => {
    try {
        const todo = await Queues.findAll();
        res.send(todo)
    } catch (error) {
        console.log(error)
    }
}


export const getQueueById = async (req, res) => {
    try {
        const todo = await Queues.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(todo[0])
    } catch (error) {
        console.log(error)
    }
}




export const createQueue = async (req, res) => {
    try {
        await Queues.create(req.body);
        res.json({
            "message": "Queue is Added .. !"
        })
    } catch (error) {
        console.log(error)
    }
}


export const updateQueue = async (req, res) => {
    try {
        await Queues.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Queue is updated .. !"
        })
    } catch (error) {
        console.log(error)
    }
}



export const deleteQueue = async (req, res) => {
    try {
        await Queues.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Queue is deleted .. !"
        })
    } catch (error) {
        console.log(error)
    }
}



export const getFirstqueue = async (req, res) => {
    try {
        const todo = await Queues.findAll({
            limit: 1,
            order:[
                ['createdAt', 'ASC']
            ]
        });
        res.send(todo)
    } catch (error) {
        console.log(error)
    }
}

export const resetAllqueue = async (req, res) => {
    try {
        await Queues.destroy({
            truncate: true
        });
        res.json({
            "message": "Queue is deleted .. !"
        })
    } catch (error) {
        console.log(error)
    }
}




