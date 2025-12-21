import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className='container mx-auto bg-white h-20 md:h-16 sticky shadow-md z-10 '>
      <div className='mx-auto flex justify-between items-center p-5'>
         <div className='text-3xl text-cyan-500 font-bold'>
        <h1 className='cursor-pointer' onClick={()=>navigate('/')}>ServiXo</h1>
      </div>
      <div>
        <NavLink to='/services' className={({isActive})=>(isActive ?  'px-3 py-1 mx-2 text-gray-700 text-sm font-medium border border-cyan-300 bg-cyan-300 rounded-md' : 'px-3 py-1 mx-2 text-gray-700 text-sm font-medium border border-cyan-300 hover:bg-cyan-300 hover:text-gray-400 rounded-md transition-all duration-500')}>Services</NavLink>
        <NavLink to='/staffs' className={({isActive})=>(isActive ?  'px-3 py-1 mx-2 text-gray-700 text-sm font-medium border border-cyan-300 bg-cyan-300 rounded-md' : 'px-3 py-1 mx-2 text-gray-700 text-sm font-medium border border-cyan-300 hover:bg-cyan-300 hover:text-gray-400 rounded-md transition-all duration-500')}>Staffs</NavLink>
        <NavLink to='/login' className={({isActive})=>(isActive ?  'px-3 py-1 mx-2 text-gray-700 border text-sm font-medium border-cyan-300 bg-cyan-300 rounded-md' : 'px-3 py-1 mx-2 text-gray-700 text-sm font-medium border border-cyan-300 hover:bg-cyan-300 hover:text-gray-400 rounded-md transition-all duration-500')}>Login</NavLink>

        {/* <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/admin'>Admin</NavLink>
        <NavLink to='/staff'>Staff</NavLink> */}
      </div>

      </div>
     
    </div>
  )
}

export default NavBar
