import React from 'react'
import './Header.css'
import food from '../../assets/Food-.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <div className='header-contents-left'>
        <h2>Đặt món yêu thích của bạn tại đây</h2>
        <p>Đảm bảo chất lượng, mang tới hương vị tuyệt cho khách hàng.Trải nghiệm một cách trọn vẹn với đồ ăn, thức uống của chúng tôi.Luôn phục vụ các bạn ...!!!</p>
          <button>View Menu</button>
        </div>
        <div className='header-contents-right'>
          <img src={food} alt=''  className='food'/>
        </div>
        
      </div>
    </div>
  )
}

export default Header