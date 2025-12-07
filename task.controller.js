import TaskModel from "../models/task.model.js";

//create new task
export const createTask = async(req,res)=>{
    try {
        const {title,desc} = req.body
        const newTask = await TaskModel.create({title,desc})
        res.status(201).json({message:"task created....",newTask})
    } catch (error) {
        res.json({message:error.message})
    }
}

//get all task
export const getAllTask = async(req,res)=>{
    try {
        const taskData = await TaskModel.find()
        res.json({success:true,taskData})
    } catch (error) {
        res.json({message:error.message})
    }
}

//show task
export const showTask = async(req,res)=>{
    try {
        const taskid = req.params.taskid
        const taskData = await TaskModel.findById(taskid)
        res.json({success:true,taskData})
    } catch (error) {
        res.json({message:error.message})
    }
}

//update task
export const updateTask = async(req,res)=>{
    try {
        const taskid = req.params.taskid
         await TaskModel.findByIdAndUpdate(taskid, req.body)
        res.json({message:"task updated..."})
    } catch (error) {
        res.json({message:error.message})
    }
}

//delete task
export const deleteTask = async(req,res)=>{
    try {
        const taskid = req.params.taskid
        await TaskModel.findByIdAndDelete(taskid)
        res.json({message:"task deleted....."})

    } catch (error) {
        res.json({message:error.message})
    }
}