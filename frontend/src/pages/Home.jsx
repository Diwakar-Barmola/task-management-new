 import React, { useState } from "react";
 
const Home = () => {

  const [formData, setFormData] = useState()

 const handleSubmit = async(e)=>{
  e.preventDefault()
try {
  const response = await fetch(`http://localhost:3000/create-task`,{method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formData)
  })
  const responseData = await response.json()
  setFormData({})
  alert('data saved successfully')
  console.log(responseData)
} catch (error) {
  console.log(error.message)
}
 }

 const handleInput = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
 }
  return (
    <div className="pt-5 ml-[40%]">
      <h1 className="text-2xl font-bold mb-5">Add Task</h1>
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

export default Home;