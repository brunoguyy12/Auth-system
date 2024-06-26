import React from 'react'
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../Context/ContextProvider';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import ApiLoader from './ApiLoader';


const Register = () => {


    const [apiLoading, setApiLoading] = useState(false);
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
    });
    const navigate = useNavigate();
    const {url, setLoading, setLoggedIn, setToken} = useAuthContext();


    const handleSignup = async(e) => {
        e.preventDefault();
        console.log("Reached to register Function: " + url);
        // console.log(data);
        setApiLoading(true);
        const response = await axios.post(url+'/api/user/register', data, {withCredentials:true})
        if(response.data.success){
            console.log("reached the success");
            // console.log(response.data)
            // alert(response.data.message);
            
            // setLoggedIn(true);
            window.localStorage.setItem('token', response.data.token);
            window.localStorage.setItem('loggedIn', true);
            toast.success(response.data.message);
            setLoading(true)
            setTimeout(() => {
                setToken(response.data.token);
                setLoggedIn(true);
                setLoading(false);
                navigate('/');
                setApiLoading(false);
            }, 2000)
        }
        else{
            toast.error(response.data.message);
            setApiLoading(false);
            // setTimeout(()=>{
            //     setLoading(false);
            // }, 2000)
            // alert(response.data.message);
            // console.log(response.data.message);
        }
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    

    const RegContainer = useRef();

    const changetoVisible = () => {
        const password = document.getElementById('password')
        if(password.type === 'password'){
            password.type = 'text'
        }else{
            password.type = 'password'
        }
    }

    // const changeToRegister = (e) => {
    //     e.preventDefault();
    //     console.log("Changing again to Register");
    //     // window.alert("Changing to Register")
    //     // const form = document.getElementById("form-el");
    //     const containerEl = container.current; 
    //     containerEl.classList.add("myRotate")
    //     // setTimeout(() => {
    //     //   containerEl.classList.remove("myRotate");
    //     // }, 1000)
        
    // }

    const handleFocus = (e) => {
        const label = e.target.previousElementSibling
        label.classList.add('text-sky-600')
    }
    const handleBlur = (e) => {
        const label = e.target.previousElementSibling
        if(e.target.value === ''){
            label.classList.remove('text-sky-600')
        }
    }

    // if(apiLoading){
    //     return <div className=' bg-white p-3'>
    //         <ApiLoader/>
    //     </div>
    // }

  return (
    <div className="container max-w-[85%] md:max-w-[75%]  min-h-[500px] rounded-xl 
    p-3 shadow-lg shadow-neutral-700 flex bg-white gap-[30px] animate-fadeIn transition-all duration-1000" ref={RegContainer}
    >    
        
        <div className="image-container w-1/2 hidden md:block">
            <img className='w-full h-full object-cover rounded-xl' src="https://media.licdn.com/dms/image/D5612AQEzNOGAvFwjvQ/article-cover_image-shrink_720_1280/0/1684937571176?e=2147483647&v=beta&t=VQRbCuu6gT1rhNT_GNFokiQPkzNdLFv2nwYsOlGxTq8" alt="" />
        </div>
        <form className='w-full md:w-1/2 relative text-neutral-600 grid content-between' onSubmit={handleSignup}>
            <div className="login-info">
                <Link to={'/'} className=' font-Jost text-lg font-extrabold text-blue-950'>Auth-System</Link>
            </div>
            <div className="form-details">
                <div className="login-title">
                    <h1>Welcome</h1>
                    <p>Sign up to create your account</p>
                </div>
                <div className='login-inputs'>
                    <div className="input-container has-[:focus]:ring-2 has-[:focus]:ring-sky-200 hover:border-sky-500">
                        <label htmlFor="name">Name</label>
                        <input id="name" name='name' value={data.name} onChange={handleChange} type="text" className='peer' onFocus={handleFocus} onBlur={handleBlur} required/>
                    </div>
                    <div className="input-container has-[:focus]:ring-2 has-[:focus]:ring-sky-200 hover:border-sky-500">
                        <label htmlFor="email">Email</label>
                        <input id="email" name='email' value={data.email} onChange={handleChange} type="text" className='peer' onFocus={handleFocus} onBlur={handleBlur} required/>
                    </div>
                    <div className="input-container has-[:focus]:ring-2 has-[:focus]:ring-sky-200 hover:border-sky-500">
                        <label htmlFor='password'>Password</label>
                        <input id="password" name='password' value={data.password} onChange={handleChange} type="password" className=' peer' onFocus={handleFocus} onBlur={handleBlur} required />
                        <span onClick={changetoVisible}>Show</span>
                    </div>
                </div>
                <div>
                    <button className='login-btn' type='submit'>
                        {
                            apiLoading ? <ApiLoader color="white"/> : 'Sign Up'
                        }
                    </button>
                    {/* <Link className=' text-sky-600 text-center my-5 w-full block hover:underline'>Forgot Password?</Link> */}
                </div>
            </div>
            <p className=' [@media(min-width:1150px)]:absolute [@media(min-width:1150px)]:top-0 [@media(min-width:1150px)]:right-0 text-center flex flex-col items-center sm:flex-row mx-auto'>Already a user? 
                <Link to='../login' className=' outline-btn ml-2 ' >Login Here</Link>
            </p>
            <div className=' text-center text-xs'>Company's details in Small<br/>Auth-System Company</div>
        </form>
    </div>
  )
}

export default Register