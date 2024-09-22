import React, { useEffect } from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/all.js'
import AOS from 'aos'
import 'aos/dist/aos.css';


const ExploreMenu = ({category,setCategory}) => {

    useEffect(() => {
        AOS.init({ duration: 500 }); 
      }, []);


  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Thực đơn của chúng tôi</h1>
        <p className='explore-menu-text'>Vui lòng lựa chọn một món từ thực đơn ở phía dưới của chúng tôi.Chúc các bạn có một trải nghiệm vui vẻ và một bữa ăn ngon lành.Xin cảm ơn!!!</p>
        <div className='explore-menu-list' data-aos ='zoom-in'>
            {
                menu_list.map((item,index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" :item.menu_name)}
                         key={index} className='explore-menu-list-item'>
                           <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu