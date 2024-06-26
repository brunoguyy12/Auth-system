import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthRoute = () => {
  return (
    <main className=' bg-sky-700' >
        <Outlet/>
    </main>
  )
}

export default AuthRoute