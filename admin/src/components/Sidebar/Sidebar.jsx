import React from 'react'
import './Sidebar.css'
import add_icon from '../../assets/add-product-icon.png'
import order_icon from '../../assets/order-icom.png'
import list_icon from '../../assets/list-icon.png'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <NavLink to = '/add' className='sidebar-option ' activeClassName='active'>
            <img src={add_icon} alt='' />
            <p>Add Product</p>
        </NavLink>

        <NavLink to ='/list' className='sidebar-option '  activeClassName='active'>
            <img src={list_icon} alt='' />
            <p>List Products</p>
        </NavLink>

        <NavLink to ='/orders' className='sidebar-option '  activeClassName='active'>
            <img src={order_icon} alt='' />
            <p>Order Products</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar