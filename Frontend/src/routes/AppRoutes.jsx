import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/student/register' element={<studentRegister />}></Route>
            {/* <Route path='/student/login' element={<studentLogin />}></Route>

            <Route path='/admin/register' element={<adminRegister />}></Route>
            <Route path='/admin/login' element={<adminLogin />}></Route> */}

        </Routes>
    </Router>
  )
}

export default AppRoutes