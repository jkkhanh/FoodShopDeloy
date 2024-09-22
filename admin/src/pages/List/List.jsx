import React, { useEffect, useState } from 'react'
import './List.css'
import  axios  from 'axios';
import { toast } from 'react-toastify';
import remove_icon from '../../assets/remove-icon.png'

const List = ({url}) => {

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }

  // const url = "http://localhost:4000"
  const [list,setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data)
    if(response.data.success){
      setList(response.data.data)
    }
    else
    {
      toast.error("Error")
    }
  }


  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }


  useEffect(() => {
    fetchList();
  },[])


  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index) => {
          return (
            <div key={index} className='list-table-format' >
              <img src={`${url}/images/` +item.image} alt='' className='image-list' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{formatPrice(item.price)}</p>
              <img onClick={() => removeFood(item._id)} src={remove_icon} alt='' className='remove-icon'/>
             
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List