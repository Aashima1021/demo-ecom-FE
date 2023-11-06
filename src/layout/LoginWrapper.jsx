import React from 'react'
import Login from '../pages/login/Login'
import Register from '../pages/login/Register'
import CheckEmail from '../pages/login/CheckEmail'
import ResetPassword from '../pages/login/ResetPassword'
import Verification from '../pages/login/Verification'
import CreateNewPassword from '../pages/login/CreateNewPassword'
import { Route, Routes } from 'react-router-dom'
import LoginNavbar from '../components/LoginNavbar'

const LoginWrapper = () => {
    return (
        <>
            <LoginNavbar />
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/check-email" element={<CheckEmail />}></Route>
                <Route path="/reset-password" element={<ResetPassword />}></Route>
                <Route path="/verification" element={<Verification />}></Route>
                <Route path="/create-password" element={<CreateNewPassword />}></Route>
            </Routes>
        </>
    )
}

export default LoginWrapper