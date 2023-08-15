import React, { useEffect } from 'react'
  import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'
import HomePage from './screens/homePage/HomePage'
import Navbar from './components/navbar/Navbar'
import LoginPage from './screens/loginPage/LoginPage'
import RegisterPage from './screens/registerPage/RegisterPage'
import ExercisesPage from './screens/exercisesPage/ExercisesPage'
import { useAppSelector } from './logic/store/store'
import { getUser } from './logic/store/features/authSlice'
import CodeEditor from './screens/codeEditor/CodeEditor'
import CreateExercise from './screens/admin/createExercise/CreateExercise'

function AppRouter() {

  const user = useAppSelector(getUser);
console.log(user)
  return (
    <div>
        <Navbar />
        {/* <Router> */}
            <Routes>
                <Route path="/login"  element={<LoginPage/>}/>
                <Route path="/register"  element={<RegisterPage/>}/>
                <Route path="/exercises"  element={
                  // <ExercisesPage />
                user ? <ExercisesPage/> : <Navigate to={"/"} />
                }/>
                <Route path="/exercises/:id"  element={
                user ? <CodeEditor/> : <Navigate to={"/"} />
                }/>
                <Route path="/admin/createExercise"  element={
                user && user.isAdmin ? <CreateExercise/> : <Navigate to={"/"} />
                }/>
                <Route path="/"  element={<HomePage/>}/>
            </Routes>
    {/* </Router> */}
    </div>
  )
}

export default AppRouter