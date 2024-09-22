import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from './../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PlaceOrder = () => {


  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext);

  const [data,setData] = useState({
    lastName: "",
    firstName:"",
    email: "",
    street: "",
    city: "",
    state: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]: value}))
  }

  // useEffect(() => {
  //   console.log(data)

  // },[data])

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {

      if (cartItems[item._id] > 0 ) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      } 
  
    })
     console.log(orderItems);
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 20000,
    }
    console.log(orderData)
    let response = await axios.post(url+"/api/order/place",orderData,{headers: {token}})
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else
    {
      alert("Error")
    }
  }


  const navigate = useNavigate();

  useEffect(() =>{
    if(!token) {
      navigate("/cart")
    }
    else if(getTotalCartAmount() === 0) {
      navigate("/cart")
    }
  },[token])


  
  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>
          Thông tin giao hàng
          <span>*Vì là hàng ăn liền nên chúng tôi chỉ giao trong nội thành Quy Nhơn, vui lòng thông cảm!!</span>
        </p>
        
        <div className='multi-fields'>
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Họ của bạn...' required/>
          <input  name = 'firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='Tên của bạn...' required/>
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Email...' required />
        <input name='street' onChange={onChangeHandler} value={data.street}  type='text' placeholder='Đường phố...' required />
        <div className='multi-fields'>
          <input name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='Thành phố' required/>
          <input name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='Tỉnh...' required/>
        </div>
        {/* <div className='multi-fields'>
          <input type='text' placeholder='Mã bưu chính'/>
          <input type='text' placeholder='Quốc gia...'/>
        </div> */}
        <input name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Số điện thoại...'  required/>
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Tổng số lượng sản phẩm: </h2>
          <div>

          <div className='cart-total-details'>
              <p>Tổng số tiền: </p>
              <p>{formatPrice(getTotalCartAmount())}</p>
            </div>
            <hr />

            <div className='cart-total-details'>
              <p>Phí ship: </p>
              <p>{formatPrice(getTotalCartAmount() === 0 ? 0 : 20000)}</p>
            </div>
            <hr />

            <div className='cart-total-details'>
              <b>Tổng cộng:</b>
              <b>{formatPrice(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20000)}</b>
            </div>
          </div>
          <button type='submit' >Thanh toán</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder