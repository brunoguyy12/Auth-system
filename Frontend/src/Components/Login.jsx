import React, { useRef,useState } from 'react'
import { useAuthContext } from '../Context/ContextProvider'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ApiLoader from './ApiLoader'
import '../CSS/Login.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const {url, setLoggedIn, setLoading, setToken} = useAuthContext();
    const [apiLoading, setApiLoading] = useState(false);
    const [data, setData] = useState({
        email:'',
        password:'',
    });

    const navigate= useNavigate();
    const container = useRef();

    const changetoVisible = () => {
        const password = document.getElementById('password')
        if(password.type === 'password'){
            password.type = 'text'
        }else{
            password.type = 'password'
        }
    }


    const handleSignIn = async(e) => {
        e.preventDefault();
        console.log("Reached to Login Function: " + url);
        // console.log(data);
        setApiLoading(true);
        const response = await axios.post(url+'/api/user/login', data, {withCredentials:true});
        if(response.data.success){
            console.log("reached the success");
            // console.log(response.data)
            // alert(response.data.message);
            // setToken(response.data.token);
            // setLoggedIn(true);
            window.localStorage.setItem('loggedIn', true);
            window.localStorage.setItem('token', response.data.token);
            toast.success(response.data.message);
            setLoading(true);
            setTimeout(() => {
                setToken(response.data.token);
                setLoggedIn(true);
                // navigate('/waitForLogin');
                setLoading(false);
                setApiLoading(false);
                navigate('/')
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

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

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

  return (
    <div className="container max-w-[85%] md:max-w-[75%]  min-h-[500px] rounded-xl 
        p-3 shadow-lg shadow-neutral-700 flex bg-white gap-[30px] animate-fadeIn transition-all duration-1000" ref={container}
    >    
        <form className='w-full md:w-1/2 relative text-neutral-600 grid content-between' onSubmit={handleSignIn}>
            <div className="login-info">
                <Link to={'/'} className=' font-Jost text-lg font-extrabold text-blue-950'>Auth-System</Link>
            </div>
            <div className="form-details">
                <div className="login-title">
                    <h1>Welcome Back</h1>
                    <p>Sign in to your Account from here</p>
                </div>
                <div className='login-inputs'>
                    <div className="input-container has-[:focus]:ring-2 has-[:focus]:ring-sky-200 hover:border-sky-500">
                        <label htmlFor="email">Email</label>
                        <input id="email" name='email' value={data.email} type="text" className='peer' onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required/>
                    </div>
                    <div className="input-container has-[:focus]:ring-2 has-[:focus]:ring-sky-200 hover:border-sky-500">
                        <label htmlFor='password'>Password</label>
                        <input id='password' name='password' value={data.password} type="password" className=' peer' onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
                        <span onClick={changetoVisible}>Show</span>
                    </div>
                </div>
                <div>
                    <button className='login-btn' type='submit'>
                        {
                            apiLoading ? <ApiLoader color="white"/> : 'Login'
                        }
                    </button>
                    <Link className=' text-sky-600 text-center my-4 w-full block hover:underline'>Forgot Password?</Link>
                </div>
            </div>
            <p className=' [@media(min-width:1150px)]:absolute [@media(min-width:1150px)]:top-0 [@media(min-width:1150px)]:right-0 text-center flex flex-col items-center sm:flex-row mx-auto'>Are you new Here 
                <Link to='/auth/register' className=' outline-btn ml-2 ' >Register Here</Link>
            </p>
            <div className=' text-center text-xs'>Company's details in Small<br/>Auth-System Company</div>
        </form>
        <div className="image-container w-1/2 hidden md:block">
            <img className='w-full h-full object-cover rounded-xl' src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/6050490/cover_image/regular_1708x683/Untitled-f669dcd36b0e05e02d4573cb800e24b0.png" alt="" />
        </div>
    </div>

  )
}

export default Login