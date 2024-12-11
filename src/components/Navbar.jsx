import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
     <NavLink to='/' className={({isActive})=> isActive? 'active-class': 'deactive-class'}>
        Home
     </NavLink>
     <NavLink to={'/notes'} className={({isActive})=> isActive? 'active-class': 'deactive-class'}>
        Notes
     </NavLink>
   
   
    </nav>
  )
}

export default Navbar
