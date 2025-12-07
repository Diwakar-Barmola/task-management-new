import React, { useEffect, useState } from "react";
import Task from './Task'
 

const TaskList = () => {

  const[refresh, setRefresh] = useState(false)

  const [tasks,setTasks] = useState()
  useEffect(()=>{
    setRefresh(false)
    const getTask = async()=>{
      const result = await fetch(`http://localhost:3000/get-all-task`)
      const newresult = await result.json()
      setTasks(newresult)
    }
    getTask()
  },[refresh])

const deleteTask = async(taskid)=>{
    try {
      const result = await fetch(`http://localhost:3000/delete-task/${taskid}`,{method:'DELETE'})
      const newresult = await result.json()
      if(!result.ok){
          throw new Error(newresult.message)
      }
      setRefresh(true)
      alert("data deleted...")
    } catch (error) {
      console.log(error.message)
    }
}

  return (
    <div className="pt-5">
      <h1 className="text-2xl font-bold mb-5">My Tasks</h1>
        {tasks && tasks.success ? tasks.taskData.map((task)=> <Task key={task._id} props={task} onDelete={deleteTask}/>) : <>Loading....</>}
    </div>
  );
};

export default TaskList;