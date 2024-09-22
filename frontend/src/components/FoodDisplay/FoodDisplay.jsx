import React, { useContext, useEffect, useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list, search, showSearch} = useContext(StoreContext)
    const [filterProduct,setFilterProduct] = useState([])

    //Search
    const searchProduct = () => {
        let products_food = food_list.slice()
        if (showSearch && search) {
            products_food = products_food.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilterProduct(products_food)
    }

    useEffect(() => {
        searchProduct();
    },[search,showSearch,food_list])

  return (
    <div className='food-display' id='food-display'>
        <h2>Các món hàng đầu</h2>
        <div className='food-display-list'>
            {filterProduct.slice(0,20).map((item,index) => {
                if(category === "All" || category === item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}  />
                }      
            })}
        </div>
    </div>
  )
}

export default FoodDisplay