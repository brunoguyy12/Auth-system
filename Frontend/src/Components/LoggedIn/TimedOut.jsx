import React from 'react'
import { useAuthContext } from '../../Context/ContextProvider'
import { useNavigate } from 'react-router-dom';

const TimedOut = () => {
    const {setLoading, setLoggedIn, loggedOut, setLoggedOut} = useAuthContext();
    const navigate = useNavigate();

    const loginagain = ()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoggedIn(false);
            navigate('/auth/login');
            setLoggedOut(false);
            setLoading(false);
        },2000)
    }

  return (
    <div className={`w-screen h-screen bg-black/30 ${loggedOut? 'block': 'hidden'} absolute`}>
        <div className={`bg-slate-800 py-3 px-6  w-fit rounded-lg flex items-center flex-col gap-4 absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${loggedOut ? 'scale-100 block ': 'scale-125 hidden '}`}>
            <h1 className='text-xl text-white text-center'>Session Timed Out</h1>
            <p className='text-lg text-gray-300'>Please login again to continue</p>
            <button className=' py-1 px-4 rounded-full border border-white text-gray-200 hover:scale-105 transition-all' onClick={loginagain}>Log in</button>
        </div>
    </div>
  )
}

export default TimedOut