import express from 'express'
import connections from './dbConnections.js'
import dotenv from 'dotenv'
import cors from 'cors'
import Taskrouter from './routes/task.route.js'
dotenv.config()
const app = express()

//middleware
app.use(cors({origin:`http://localhost:5173`}))
app.use(express.json())

 //routes
 app.use(Taskrouter)

const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`server is running on ${port}`))
//db connections
connections()