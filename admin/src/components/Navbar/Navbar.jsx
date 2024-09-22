import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-fs.png'
import profile from '../../assets/38.jpg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='' className='logo' />
        <img src={profile} alt='' className='profile'/>
    </div>
  )
}

export default Navbar