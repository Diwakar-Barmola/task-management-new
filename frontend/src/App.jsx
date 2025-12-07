 import React from 'react'
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import TaskList from './pages/TaskList'
import ShowTask from './pages/ShowTask'
import Nav from './pages/Nav'
 
 const App = () => {
   return (
     <>
       <BrowserRouter>
            <Nav />
        <Routes>
           <Route path='/' element={<Layout />}/>
           <Route index element={<Home />}/>
           <Route path='/task-list' element={<TaskList />}/>
           <Route path='/show-task/:taskid' element={<ShowTask />}/>
        </Routes>
      </BrowserRouter>
     </>
   )
 }
 
 export default App
 