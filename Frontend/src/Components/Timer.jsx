import React, { useEffect } from 'react'
import { useAuthContext } from '../Context/ContextProvider'

const Timer = () => {

  const {tokentimeout, settokentimeout, tokenExtended, setTokenExtended, refreshToken, timedOut} = useAuthContext();
  // const {} = useAuthContext();
  // console.log(tokentimeout+"In Timer Modal");

  // useEffect(()=>{
  //   console.log("Token Extended: ", tokenExtended)
  //   console.log("Token timeout is: ", tokentimeout);
  // },[tokenExtended]);
  return (
    <div className={`py-4 px-3 rounded-md shadow-sm shadow-slate-700 flex flex-col gap-5 z-30 w-fit absolute mx-auto left-1/2 
      -translate-x-1/2 transition-all duration-300 bg-white ${tokentimeout ? 'top-3' : '-top-full' }`}>
        <h3 className=' text-xl font-semibold text-slate-800'>Your session is about to expire</h3>
        <p className=' text-slate-600'>Confirm to extend the session for More minutes<br/>or cancel to log out</p>
        <div className=' mx-auto flex justify-center w-[60%] gap-4'>
            <button className='login-btn bg-slate-300 text-slate-700 hover:bg-slate-400' 
              onClick={()=>{timedOut();settokentimeout(false)}}>Cancel</button>
            <button className='login-btn'
              onClick={()=>{refreshToken();settokentimeout(false)}}>Extend</button>
        </div>
    </div>
  )
}

export default Timer