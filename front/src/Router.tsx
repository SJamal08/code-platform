import React from 'react'
  import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './screens/homePage/HomePage'
import Navbar from './components/navbar/Navbar'
import LoginPage from './screens/loginPage/LoginPage'
import RegisterPage from './screens/registerPage/RegisterPage'

function AppRouter() {
  return (
    <div>
        <Navbar />
        {/* <Router> */}
            <Routes>
                <Route path="/login"  Component={LoginPage}/>
                <Route path="/register"  Component={RegisterPage}/>
                <Route path="/"  Component={HomePage}/>
            </Routes>
    {/* </Router> */}
    </div>
  )
}

export default AppRouter