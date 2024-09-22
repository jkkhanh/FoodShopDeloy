import React, { useContext } from 'react'
import './SeachBar.css'
import { StoreContext } from '../../context/StoreContext'
import cross_icon from '../../assets/cross-purple.png'

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(StoreContext);

  return showSearch ?  (
    <div className='search-bar'>
        <div className='search-bar-main'>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Tìm kiếm...' />
            {/* <img onClick={() => setShowSearch(false)} src ={cross_icon}  alt='' /> */}
        </div>
    </div>
  ) : null
}

export default SearchBar