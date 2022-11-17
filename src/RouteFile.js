import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddStaff from './Components/AddStaff/AddStaff'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import AppProvider from './ContextAPI/AppProvider'
import Home from './Components/Home/Home'
import SaveMessage from './Components/Message/SaveMessage'
import UploadFile from './Components/File/UploadFile'
import LoginAdmin from './Components/LoginAdmin/LoginAdmin'



const RouteFile = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/adminHome' element={<AddStaff />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/sendmessage' element={<SaveMessage/>} />
          <Route path='/loginAdmin' element={<LoginAdmin/>} />
          <Route path='/uploadFile' element={<UploadFile/>} />
          

        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default RouteFile