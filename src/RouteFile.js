import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddStaff from './Components/AddStaff/AddStaff'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import AppProvider from './ContextAPI/AppProvider'
import Home from './Components/Home/Home'
import SaveMessage from './Components/Message/SendMessage'
import UploadFile from './Components/File/UploadFile'
import LoginAdmin from './Components/LoginAdmin/LoginAdmin'



const RouteFile = () => {
  const role = localStorage?.getItem("userType")
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/adminHome' element={<AddStaff /> } />
          <Route path='/home' element={<Home/>} />
          <Route path='/sendmessage' element={role == 'MANAGER' || role == 'WORKER' ? <SaveMessage/> : <Login />} />
          <Route path='/loginAdmin' element={<LoginAdmin/>} />
          <Route path='/uploadFile' element={role == 'MANAGER' ? <UploadFile/> : <Login />} />
          

        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default RouteFile