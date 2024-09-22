import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import cross_icon from '../../assets/cross_icon.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { StoreContext } from '../../context/StoreContext';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPopup = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext)

    const [currState,setCurrState] = useState ("Login")
    const [data,setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData( data => ({...data,[name] : value}))
    }

    // useEffect(() => {
    //     console.log(data)
    // },[data]) test data cua login va sign up

    const onLogin = async (event) =>{
        event.preventDefault()
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login"
        }
        else {

            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if (response.data.success) {
            toast.success("Đăng nhập thành công") // không thích thì bỏ

            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
            
        }
        else {
            alert(response.data.message)
        }
    }

    useEffect(() => {
        AOS.init({ duration: 1100 }); 
      }, []);


  return (
    <div className='login-popup' >
        <form onSubmit={onLogin} className='login-popup-container' data-aos ='flip-left'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={cross_icon} alt='' />
            </div>
            <div className='login-popup-inputs'>
                {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Tên của bạn...' required />}         
                <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='E-mail của bạn...' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Mật khẩu...' required />
            </div>
            <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required />
                <p>Bạn có đồng ý với chính sách của chúng tôi?</p>
            </div>
            {
                currState === "Login" ? <p>Bạn chưa có tài khoản?<span onClick={() => setCurrState("Sign Up")}>Tạo tài khoản</span></p> : <p>Bạn đã có tài khoản?<span onClick={() => setCurrState("Login")}>Đăng nhập</span></p> 
            }
        </form>
    </div>
  )
}

export default LoginPopup