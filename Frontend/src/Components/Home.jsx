import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();

  return (
    <main className='  animate-fadeIn  text-slate-800 flex-col gap-8 p-3'>
        <div className='text-3xl md:text-5xl font-Nunito font-[1000]'>Welcome to <span className='font-Nunito font-[1000]'>Auth-System</span></div>
        <div>
          <p className='text-xl md:text-2xl text-slate-600 font-semibold'>A simple authentication system built using MERN stack</p>
        </div>
        <button onClick={()=>navigate('/auth')} className=' font-Outfit 
          text-xl font-medium py-2 px-5 border-2 border-blue-600 rounded-full 
          relative hover:bg-blue-600 hover:text-white group'>Login to Experience
          <span className=' absolute w-4 h-4 bg-blue-700 -top-2 -right-2 rounded-full animate-attention group-hover:bg-blue-900'></span>
        </button>
        <div className=' flex items-center gap-5'>
          <hr className=' h-[2px] w-hundred bg-slate-500 rounded-full '/>
          <p>Or</p>
          <hr className=' h-[2px] w-hundred bg-slate-500 rounded-full'/>
        </div>
        <button onClick={()=>navigate('/about')} className=' font-Outfit 
          text-xl font-medium py-2 px-5 rounded-full bg-neutral-300 min-w-[200px]'>Read the Docs
        </button>
    </main>
  )
}

export default Home