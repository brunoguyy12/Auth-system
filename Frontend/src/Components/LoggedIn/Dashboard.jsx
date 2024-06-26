import React, {useEffect, useState} from 'react'
import { useAuthContext } from '../../Context/ContextProvider'
import ApiLoader from '../ApiLoader';
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {

  const {url, token, logout} = useAuthContext();
  const [isChanged, setIsChanged] = useState(false);
  const [user, setUser] = useState({});
  const [apiLoading, setApiLoading] = useState(false);
  // const [userData, setuserData] = useState(false);
  const [apiLoading2, setApiLoading2] = useState(false);
  const fetchData = async ()=>{
    const response = await axios.post(url+'/api/user/dashboard', {}, {headers: {token: token}});
    // setApiLoading(true);
    console.log(response.data)
    if(response.data.success){
      
      // setuserData(true);
      setUser(response.data.user);
      console.log('reached success')
      // console.log(response.data.user)
      setUser(response.data.user)
      setApiLoading(false);
    }
    else{
      console.log(response.data.message)
      setApiLoading(false);
      logout();
    }
  }

  const handleChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value});
    setIsChanged(true);
    if(isChanged){
      document.getElementById("saveBtn").classList.add("login-btn");
    }
    // setIsChanged(false);
  }

  const saveChanges = async (e)=>{
    e.preventDefault();
    if(isChanged){
      setApiLoading2(true);
      const response = await axios.post(url+'/api/user/change', {name: user.name, email: user.email}, {headers: {token: token}});
      if(response.data.success){
        setApiLoading2(false);
        toast.success(response.data.message);
        document.getElementById("saveBtn").classList.remove("login-btn");
      }
      else{
        setApiLoading2(false);
        toast.error(response.data.message);
      }
      setIsChanged(false);
    }
    else{
      toast.info("Change Data First");
    }
  }

  useEffect(() => {
    setApiLoading(false);
    setApiLoading(true);
    fetchData();
  }, [])

  if(apiLoading){
    return <main>
      <ApiLoader color='#1167d1'/>
    </main>
  }

  return (
    <main>
      <div className=' min-w-[60%] flex flex-col'>
        <h1>Account Info</h1>
          <form className=' mt-2 py-4' onSubmit={saveChanges}>
            <div className=' flex flex-col mb-3'>
              <label htmlFor="name" className=' text-lg font-medium'>Name</label>
              <input type="text" value={user.name} name='name' onChange={handleChange} autoComplete='name' className='py-2 px-3 border-slate-400 focus:border-slate-600 focus:outline-4 focus:outline-offset-1 focus:outline-blue-300 border mt-2 rounded-xl' required/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className=' text-lg font-medium'>Email</label>
              <input type="text" value={user.email} name='email' onChange={handleChange} autoComplete='email' className=' py-2 px-3 border-slate-400 focus:border-slate-600 focus:outline-4 focus:outline-offset-1 focus:outline-blue-300 border mt-2 rounded-xl' required/>
            </div>
          <button className='mt-8 py-2 px-5 border border-blue-700 peer-focus:bg-blue-600 rounded-xl w-full flex justify-center' type='submit' id='saveBtn'>
          {
            apiLoading2 ? <ApiLoader color='white' className=" mx-auto"/> : "Save Changes"
          } 
          </button>
          </form>
      </div>
    </main>
  )
}

export default Dashboard