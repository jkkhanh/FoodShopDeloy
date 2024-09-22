import React, { useState } from 'react'
import './Add.css'
import upload_icon from '../../assets/upload-icon.png'
import axios from "axios"
import { toast } from 'react-toastify';


const Add = ({url}) => {

  // const url = "http://localhost:4000";
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Trà sữa"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name] : value}))
  }

  // useEffect(() => {
  //   console.log(data)
  // },[data])

  const onSubmitHanler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
    const respone = await axios.post(`${url}/api/food/add`,formData);
    if(respone.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Trà sữa"
      })
      setImage(false)
      toast.success(respone.data.message)
    }
    else 
    {
      toast.error(respone.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHanler}>      
        <div className='add-product-name flex-col'>
          <p>Tên sản phẩm</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Tên sản phẩm...' />
        </div>      
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Loại sản phẩm</p>
            <select onChange={onChangeHandler} name='category'>
              {/* <option>Mời chọn loại sản phẩm ( bắt buộc )</option> */}
              <option value='Trà sữa'>Trà sữa</option>
              <option value='Bánh ngọt'>Bánh ngọt</option>
              <option value='Bánh cuốn'>Bánh cuốn</option>
              <option value='Hamberger'>Hamberger</option>
              <option value='Pizza'>Pizza</option>
              <option value='Kem'>Kem</option>
              <option value='Nước giải khát'>Nước giải khát</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Giá sản phẩm</p>
            <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='Giá sản phẩm...' /> 
          </div>
        </div>
        <div className='add-product-description flex-col'>
          <p>Thông tin sản phẩm</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Thông tin sản phẩm...' ></textarea>
        </div>
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <div className='image-upload' >
            <label htmlFor='image'>
              <img src={image ? URL.createObjectURL(image) : upload_icon } alt='' />
            </label>      
            <input onChange={(e) => setImage(e.target.files[0]) } type='file' id='image' hidden required />
          </div>
        </div>
        <button type='submit' className='add-btn'>Thêm sản phẩm</button>
      </form>
    </div>
  )
}

export default Add