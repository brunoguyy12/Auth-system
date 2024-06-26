import { useContext, useState, createContext, useEffect, useRef } from "react";
// import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';



// const navigate = useNavigate();
const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const url = 'http://localhost:4000';

    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedOut, setLoggedOut] = useState(false);
    const [tokentimeout, settokentimeout] = useState(false);
    const [timerShown, setTimerShown] = useState(false);
    const [tokenExtended, setTokenExtended] = useState(false);
    const [token, setToken] = useState('');

    const login = async(data)=>{
        const response = await axios.post(url+'/api/user/login', data)
        if(response.data.success){
            alert(response.data.message)
            setLoggedIn(true);
            window.localStorage.setItem('loggedIn', true);
        }
    }
    const logout = ()=>{
        window.localStorage.removeItem('loggedIn');
        window.localStorage.removeItem('token');
        window.location.href = 'http://localhost:5173/'
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000)
        
        // window.location.pathname = '/';
    };

    useEffect(() => {
        const initialSetup = ()=>{
            setLoading(true)
            const loggedIn = window.localStorage.getItem('loggedIn');
            console.log("Logged In: " + loggedIn)
            setLoggedIn(loggedIn === 'true');
            if(loggedIn === null){
                window.localStorage.setItem('loggedIn', false);
                setLoggedIn(false);
                // setLoading(false)
            }
            if(window.localStorage.getItem('token')){
                setToken(window.localStorage.getItem('token'));
            }
            setLoading(false);
        }
        initialSetup();
    }, []);


    useEffect(()=>{
        const tokenManagement = ()=>{
            if(loggedIn){
                const tokenTimeout = setTimeout(() => {
                    settokentimeout(true);
                    setTimerShown(true);
                }, 1000*10);
                // return ()=>{
                //     clearTimeout(tokenTimeout);
                // }
            }
        }
        tokenManagement();
    }, [loggedIn, tokenExtended]);

    const refreshToken = async()=>{
            const response = await axios.post(url+'/api/user/refresh-token', {}, {
                withCredentials: true, 
                headers:{token:token}
            });
            console.log("Axios executed")
            console.log(response);
            if(response.data.success){
                console.log("Token Extended Successfully")
                setToken(response.data.token);
                toast.success(response.data.message);
                // setLoggedIn(true);
                window.localStorage.setItem('token', response.data.token);
                setTokenExtended((prev)=>!prev);
            }
            else{
                console.log("Server responded false");
                logout();
            }
    }

    const timedOut = ()=>{
        window.localStorage.removeItem('loggedIn');
        window.localStorage.removeItem('token');
        // setTokenExtended(false);
        setLoggedOut(true);
    }

    const contextValue = {
        login, logout, loggedIn, setLoggedIn, loading, setLoading, url, token, setToken, tokentimeout, settokentimeout,
        tokenExtended, setTokenExtended, refreshToken, loggedOut, timedOut, setLoggedOut
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = ()=>useContext(AuthContext);