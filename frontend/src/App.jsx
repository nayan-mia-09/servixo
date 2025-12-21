import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import StaffsPage from './pages/StaffsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import MyProfile from './pages/MyProfile'
import MyServices from './pages/MyServices'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='container mx-auto'>
      <NavBar/>
       <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
      <Route path='/staffs' element={<StaffsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/my-profile' element={<MyProfile/>}/>
      <Route path='/my-services' element={<MyServices/>}/>
      <Route path='/book-services' element={<ServicesPage/>}/>
    </Routes>
    </div>
   
    
  )
}

export default App
