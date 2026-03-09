import React from 'react'
import Home from './pages/Home'
import Register from './components/auth/Register'
import {  Routes,Route } from "react-router-dom"

const App = () => {
  return (
   
      <Routes>
         <Route path='/Register' element={<Register />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
  
    
  )
}

export default App