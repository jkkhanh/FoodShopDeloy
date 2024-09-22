import React from 'react'
import './AppDownload.css'
import ch_play from '../../assets/ch-play.png'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>Tải ứng dụng trên CH-Play</p>FOOD-SHOP
      <div className='app-download-platforms'>
        <img src={ch_play} alt=''/>
      </div>
    </div>
  )
}

export default AppDownload