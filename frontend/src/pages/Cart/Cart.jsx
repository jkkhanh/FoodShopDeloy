import React, { useContext, useEffect } from 'react'
import './Cart.css'
import { StoreContext } from './../../context/StoreContext';
import cross from '../../assets/cross-purple.png'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }


  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url } = useContext(StoreContext)

  const navigate = useNavigate();


  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Sản phẩm</p>
          <p>Tên sản phẩm</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng cộng</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index) => {
          if(cartItems[item._id] > 0){

            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={url + "/images/" +item.image} alt='' />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <img src={cross} alt='' className='cross' onClick={() => removeFromCart(item._id)} />
                </div>
                <hr />
              </div>
            )

          }
        })}
      </div>
      <div className='cart-bottom'>
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
          <button onClick={() => navigate('/order')}>Tiến hành thanh toán</button>
        </div>

        <div className='cart-promocode'>
        <div>
          <p>Mã khuyến mãi:</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='Nhập mã khuyến mãi vào đây...' />
            <button>Hoàn thành</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart