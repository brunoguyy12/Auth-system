import React from 'react'
import {Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <header className=' font-Poetsen text-[15px] min-h-fifty flex items-center  justify-evenly sm:justify-between px-5 md:px-fifty border border-slate-400 '>
        <Link to={'/'} className=' flex items-center'>
          <p to={'/'} className=' font-Jost text-xl md:text-2xl font-extrabold text-sky-700'>Auth-System</p>
            {/* <img src="https://icons.veryicon.com/png/o/miscellaneous/cloud-his-icon/40-authentication.png" className=' w-10 h-auto' alt="" /> */}
        </Link>
        <div className='
            *:font-medium *:md:p-[5px_15px] *:p-[3px_10px] *:rounded-xl gap-5  md:gap-8 flex items-center'>
            <Link to='/about' className='hover:bg-neutral-100 text-neutral-700 border border-slate-400'>About</Link>
            <Link to="/auth" className= ' border border-sky-500  bg-sky-500 text-white hover:bg-sky-600'>Login</Link>
        </div>
    </header>
  )
}

export default Navbar