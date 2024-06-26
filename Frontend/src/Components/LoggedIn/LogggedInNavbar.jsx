import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Context/ContextProvider'

const LogggedInNavbar = () => {

  const {logout} = useAuthContext();
  

  return (
    <header className=' font-Poetsen text-[15px] min-h-fifty flex items-center  justify-evenly sm:justify-between px-5 md:px-fifty border border-slate-400 '>
        <Link to={'/'} className=' font-Jost text-xl md:text-2xl font-extrabold text-sky-700'>Auth-System</Link>
        <div className='
            *:font-medium *:md:p-[5px_15px] *:p-[3px_10px] *:rounded-xl gap-5  md:gap-8 flex items-center'>
            <Link to='/profile' className=' hover:bg-neutral-100 text-neutral-700 border border-slate-400'>Profile</Link>
            <button onClick={logout} className= ' border border-sky-500   bg-sky-500 text-white'>Logout</button>
        </div>
    </header>
  )
}

export default LogggedInNavbar