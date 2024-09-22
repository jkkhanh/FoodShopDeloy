import React, { useContext, useState } from 'react'
import './Navbar.css'
import search_icon from '../../assets/aearcicon.png'
import basket_icon from '../../assets/basket.png'
import { GiOrangeSlice } from "react-icons/gi";
import profile_icon from '../../assets/profile-icon.png'
import bag_icon from '../../assets/bag-icon.png'
import logout_icon from '../../assets/logout.png'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';


const Navbar = ({ setShowLogin}) => {

    const [menu,setMenu] = useState('menu');

    const{setShowSearch} = useContext(StoreContext)

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        toast.info("Đăng xuất thành công") //không thích thì bỏ
        navigate("/")
    }

  return (
    <>
        <div className='navbar'>
        <div>
            <Link to ='/'><h1>FoodShop-K <span style={{fontSize: '35px'}}><GiOrangeSlice /></span></h1></Link>
        </div>
        <ul className='navbar-menu'>
            <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</a>
            <a href='#app-download' onClick={() => setMenu("contact-us")} className={menu === 'contact-us' ? 'active' : ''}>Mobile-App</a>
            <a href='#footer' onClick={() => setMenu("about")} className={menu === 'about' ? 'active' : ''}>Contact-us</a>
        </ul>
        <div className='navbar-right'>
            <img onClick={() => setShowSearch(true)} src={search_icon} alt='' className='search-icon'/>
            <div className='navbar-search-icon'>
                <Link to='/cart' ><img src={basket_icon} alt='' className='basket-icon' /></Link>
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            {!token ? <button onClick={() =>  setShowLogin(true)}>Sign In</button>
                : <div className='navbar-profile'>
                    <img src={profile_icon} alt='' />
                    <ul className='nav-profile-dropdown'>
                        <li onClick={() => navigate("/myorders")}><img src={bag_icon} alt='' /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img src={logout_icon} alt='' /><p>Logout</p></li>
                    </ul>
                </div>
            }
            
        </div>
    </div>
    <hr />
    </>
    
  )
}

export default Navbar