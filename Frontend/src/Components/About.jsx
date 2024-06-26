import React from 'react'
import Timer from './Timer'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  return (
    <div className='animate-fadeIn'>
      <section className=' flex flex-col md:flex-row items-center bg-neutral-200 md:px-5 md:py-5'>
        <div className=' relative  flex flex-col gap-4 md:gap-7 justify-center items-center  p-3 rounded-lg w-full md:w-1/2 '>
          <div className=' flex flex-col justify-start items-start z-20 p-0 gap-3'>
            <h2 className=' text-3xl font-black text-slate-800 text-center'>Welcome to Auth-System by @BrunoGuyy12</h2>  
            <p className=' text-lg'>A comprehensive authentication system built by @BrunoGuyy12. Sign up, log in, and manage your account with ease.</p>
          </div>
          <button className=' w-fit px-7 font-semibold py-2 rounded-full border 
          border-slate-800 hover:shadow-lg hover:shadow-slate-400 hover:font-bold transition-all'
            onClick={() => {navigate('/auth/register')}}
          >Get Started</button>
        </div>  
        <img src="/Authentication.svg" alt="" className=' drop-shadow-md w-full p-2 md:w-1/2'/>
      </section>

      {/* Section For introduction of Features */}
      <section className=' my-8 flex flex-col  items-center gap-6 max-w-[85%] mx-auto'>
        <h1>Authentication Simplified</h1>
        <div className=' flex gap-5 flex-col md:flex-row'>
          <div className=' p-5 w-full md:w-1/3  border border-slate-400 rounded-md flex flex-col gap-5'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-slate-800">
                <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className=' font-medium text-lg'>Security First</h3>
              <p className=' text-slate-500'>Secure your app with the latest industry standards using jWT Tokens</p>
            </div>
          </div>

          <div className=' p-5 w-full md:w-1/3  border border-slate-400 rounded-md flex flex-col gap-5'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>
            </div>
            <div>
              <h3 className=' font-medium text-lg'>User Friendly</h3>
              <p className=' text-slate-500'>Integrate the Auth-System with your app in minutes with absolute ease</p>
            </div>
          </div>

          <div className=' p-5 w-full md:w-1/3  border border-slate-400 rounded-md flex flex-col gap-5' >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              </svg>
            </div>
            <div>
              <h3 className=' font-medium text-lg'>Customizable</h3>
              <p className=' text-slate-500'>Customize the Auth-System to fit your app's needs and get full control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section for Get started  */}

      <section className=' my-8 flex flex-col  items-start gap-6 max-w-[85%] mx-auto'>
        <h1 className=' text-start w-full text-3xl'>Get Started</h1>
        <div className='p-5 border border-slate-400 w-full rounded-xl flex justify-between items-center gap-3 md:gap-0'>
          <div className=' flex flex-col gap-1 text-justify'>
            <h3 className=' font-semibold text-lg'>New to Auth-system?</h3>
            <p className=' text-slate-500'>
              Get started with Auth-System by creating an account and experience the ease and secured login system
            </p>
          </div>
          <button className='py-2 px-4 text-lg text-white bg-blue-400 rounded-full h-fit w-hundred'
            onClick={() => {navigate('/auth/register')}}
          >Register</button>
        </div>
        <div className='p-5 border border-slate-400 w-full rounded-xl flex justify-between items-center gap-3 md:gap-0'>
          <div className=' flex flex-col gap-1 text-justify'>
            <h3 className=' font-semibold text-lg'>Already have an account?</h3>
            <p className=' text-slate-500'>
              Log in to your account and manage your account details with ease
            </p>
          </div>
          <button className='py-2 px-4 text-lg text-white bg-blue-400 rounded-full h-fit w-[100px]'
            onClick={() => {navigate('/auth')}}
          >Login</button>
        </div>
      </section>

      {/* <Timer/> */}
    </div>
  )
}

export default About