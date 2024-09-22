import React, { useContext, useEffect, useState } from 'react'
import './FoodItem.css'
import rating_icon from '../../assets/rating.png'
import add_icon from '../../assets/add-icon.png'
import remove_icon from '../../assets/remove-icon.png'
import { StoreContext } from '../../context/StoreContext'
import AOS from 'aos'
import 'aos/dist/aos.css';



const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  
const FoodItem = ({id,name,price,description,image}) => {

    //const [itemCount,setItemCount] = useState(0)
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

    useEffect(() => {
        AOS.init({ duration: 1300 }); // Khởi tạo AOS với thời gian chuyển động 1 giây
      }, []);

  return (
    <div className='food-item'data-aos='fade-up'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={url+"/images/" +image} alt='' />
            {
                !cartItems[id] 
                    ?<img className='add'onClick={() => addToCart(id)} src= {add_icon} alt='' /> : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={remove_icon} alt='' />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={add_icon} alt='' />
                    </div>
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p title={name}>{name}</p>
                <img src={rating_icon} alt='' className='rating-icon' />
            </div>
            <p className='food-item-desc' title={description}>" {description} "</p>
            <p className='food-item-price'>{formatPrice(price)}</p>
        </div>
    </div>
  )
}

export default FoodItem