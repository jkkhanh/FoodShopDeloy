import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import  axios  from 'axios';
import parcel_icon from '../../assets/parcel.png'

const MyOrders = () => {
    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
      }

    const {url,token} = useContext(StoreContext)
    const [data,setData] = useState([]);


    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders", {}, {headers: {token}});
        setData(response.data.data);
        // console.log(response.data.data)
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    },[token])



  return (
    <div className='my-orders'>
        <h2>Đơn hàng của tôi</h2>
        <div className='container'>
            {data.map((order,index) => {
                return (
                    <div key={index} className='my-orders-order'>
                        <img src={parcel_icon} alt='' />
                        <p>{order.items.map((item,index) => {
                            if (index === order.items.length-1){
                                return item.name+ " ( x " +item.quantity +" )"
                            }
                            else {
                                return item.name+ " ( x " +item.quantity +" )" +" , "
                            }
                        })}</p>
                        <p>{formatPrice(order.amount)}</p>
                        <p>Số sản phẩm: {order.items.length}</p>
                        <p><span>&#x25cf; </span><b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Theo dõi đơn hàng</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders