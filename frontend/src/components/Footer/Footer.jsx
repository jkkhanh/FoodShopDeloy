import React from 'react'
import './Footer.css'
import logo from '../../assets/logo-footer.png'
import fb_icon from '../../assets/facebook-icon.png'
import ins_icon from '../../assets/instagram-icon.png'
import zalo_icon from '../../assets/zalo-icon.png'
import { GiOrangeSlice } from "react-icons/gi";
import orange from '../../assets/orange.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                {/* <img src={logo} alt=''  className='logo-footer'/> */}
                <h1>FoodShop-k <span style={{fontSize: '35px'}}><GiOrangeSlice /></span></h1>
                <p>"FoodShop" là một website dùng để order đồ ăn/ thức uống.Chúng tôi luôn hướng đến những thứ hiện đại theo công nghệ của thời đại này. Luôn cập nhật tin tức cũng như liên tục cập nhật các công thức về những món ăn ngon,
                    nhằm mục đích mang lại trải nghiệm sảng khoái cho người mua một cách trọn vẹn!!!
                </p>
                <div className='footer-social-icons'>
                    <img src={fb_icon} alt='' title='FaceBook: Nguyễn Lê Khánh'/>
                    <img src={ins_icon} alt='' title='Instagram: nlk_dev' />
                    <img src={zalo_icon} alt='' title='Zalo: Kh' />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>CÔNG TY</h2>
                <ul>
                    <li>Trang chủ</li>
                    <li>Về chúng tôi</li>
                    <li>Vận chuyển</li>
                    <li>Chính sách bảo mật</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>LIÊN HỆ</h2>
                <ul>
                    <li>(+84) - 035.729.6877</li>
                    <li>E-mail: @foodshopk@gmail.com</li>
                </ul>
            </div>       
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @DevToanBug - Xin chào !!!</p>
    </div>
  )
}

export default Footer