import mongoose from "mongoose";

const connections = async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log(`database connected at : ${mongoose.connection.host}`)
    } catch (error) {
        console.log(error.message)
    }
}


export default connections;