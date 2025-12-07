import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true, 
        enum:['To Do','In Progress', 'Done'],
        default:"In Progress"
    },
    priority:{
        type:String,
        required:true, 
        enum:['Low','Medium', 'High'],
        default:"Low"
    },
},{timestamps:true})

const TaskModel = mongoose.model('TaskModel', taskSchema)
export default TaskModel