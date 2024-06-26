import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import { useAuthContext } from './Context/ContextProvider';
import './App.css'
import AuthRoute from './Components/AuthRoute';
import Register from './Components/Register';
import LogggedInNavbar from './Components/LoggedIn/LogggedInNavbar';
import Dashboard from './Components/LoggedIn/Dashboard';
import Loading from './Components/Loading';
import Profile from './Components/LoggedIn/Profile';
import { ToastContainer } from 'react-toastify';
import Timer from './Components/Timer';
import 'react-toastify/dist/ReactToastify.css';
import TimedOut from './Components/LoggedIn/TimedOut';


const App = () => {
  
  const {loggedIn, loading} = useAuthContext();
  // console.log(process.env.PORT);

  if(loading){
    return <Loading/>
  }
  return (
    <BrowserRouter>
      <ToastContainer position='top-right'  />
      <Timer/>
      <TimedOut/>
      {
        !loggedIn ? 
        <>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/*" element={<AuthRoute/>}>
              <Route index element={<Login/>} />
              <Route path='login' element={<Login/>} />
              <Route path='register' element={<Register/>} />
            </Route>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<h1 className=' w-full min-h-[calc(100vh-50px)] flex justify-center items-center'><span className=' text-red-950 mr-5'>404</span> Not Found</h1>} />
          </Routes>
        </>
        :  
        <>
          <LogggedInNavbar/>
          <Routes>
            <Route path="/" index element={<Dashboard/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<h1 className=' w-full min-h-[calc(100vh-50px)] flex justify-center items-center'><span className=' text-red-950 mr-5'>404</span> Not Found</h1>} />
          </Routes>
        </>
      }
    </BrowserRouter>
  )
}

export default App