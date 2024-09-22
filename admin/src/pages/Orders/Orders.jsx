import React from 'react'
import './Orders.css'
import axios  from 'axios';
import { useState } from 'react';
import { toast } from "react-toastify"
import { useEffect } from 'react';
import parcel_icon_admin from '../../assets/prace-icon.png'

const Orders = ({url}) => {

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }

  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event, orderId) => {
    // console.log(event,orderId)
    const response = await axios.post(url+"/api/order/status", {
      orderId,
      status: event.target.value
    })
    
    if(response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders()
  },[])


  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {orders.map((order,index) => {
          return (
            <div key={index} className='order-item'>
            <img src={parcel_icon_admin} alt='' />
            <div>
              <p className='order-item-food'>
                {order.items.map((item,index) => {
                  if(index === order.items.length-1) {

                    return item.name + " (" + " x " + item.quantity + " )"
                  }
                  else {
                    return item.name + " x " + item.quantity + " , "
                  }
                })}
              </p>
              <p className='order-item-name'>- Người đặt: {order.address.lastName + " " + order.address.firstName}</p>
              <div className='order-item-address'>
                <p>- Địa chỉ: {order.address.street + ", " + order.address.city + ", " + order.address.state}</p>
                {/* <p>{order.address.city + ", " + order.address.state}</p> */}
              </div>
              <p className='order-item-phone'>- Số điện thoại: {order.address.phone}</p>
            </div>
            <p>Số sản phẩm: {order.items.length}</p>
            <p>Tổng tiền: {formatPrice(order.amount)}</p>
            <select onChange={(event) => statusHandler(event,order._id)} value={order.status}>
              <option value='Food Processing'>Food Processing</option>
              <option value='Giao hàng'>Giao hàng</option>
              <option value='Đã giao hàng'>Đã giao hàng</option>
            </select>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders