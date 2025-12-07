 import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
const ShowTask = () => {
   const {taskid} = useParams()
  const [formData, setFormData] = useState()
  const [apiData, setApiData] = useState()

 const handleSubmit = async(e)=>{
  e.preventDefault()
try {
  const response = await fetch(`http://localhost:3000/update-task/${taskid}`,{method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formData)
  })
  const responseData = await response.json()
  setFormData({})
  alert('data updated successfully')
  console.log(responseData)
} catch (error) {
  console.log(error.message)
}
 }

 const handleInput = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
 }

useEffect(()=>{
  const showTask = async()=>{
    const response = await fetch(`http://localhost:3000/show-task/${taskid}`)
    const responseData = await response.json()
    setApiData(responseData)
    setFormData(responseData.taskData)
   }
  showTask()
},[])

  return (
    <div className="pt-5 ml-[40%]">
      <h1 className="text-2xl font-bold mb-5">Task Details</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Title
          </label>
          <input
            onChange={handleInput}
            value={formData?.title || ''}
            name="title"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5"
            placeholder="Task title"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Description
          </label>
          <textarea
            onChange={handleInput}
            value={formData?.desc || ''}
            name="desc"
            rows="4"
            className="block p-2.5 w-[40%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Task description..."
          ></textarea>
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Select Status
          </label>
            <select name="status" onChange={handleInput} defaultValue={formData?.status || ''} className="block p-2.5 w-[40%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                <option value="To Do">To Do</option>
                <option value="Inn Progress">In Progress</option>
                <option value="Done">Done</option>  
            </select>
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Select Priority
          </label>
            <select name="priority" onChange={handleInput} defaultValue={formData?.priority || ''} className="block p-2.5 w-[40%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                <option value="Low">Low</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>  
            </select>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[40%] sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form> 
       
    </div>
  );
};

export default ShowTask;