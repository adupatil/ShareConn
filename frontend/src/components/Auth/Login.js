import React, { useState,useEffect } from 'react';
import '../../assets/css/Auth.css';

import { NavLink, Redirect } from 'react-router-dom';
import {updateAuthKey} from '../../features/user/userSlice'
import { useDispatch } from 'react-redux';
import '../../assets/css/Auth.css'

function Login() {
    const [username,setusername]=useState(null)
    const [password,setpassword]=useState(null)
    const [email,setemail]=useState(null)
    const [token,settoken]=useState(null)
    useEffect(()=>{
        settoken(localStorage.getItem('token'))
        console.log(token)
    },[])

    
   
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault();
        let data={
            username:username,
            email:email,
            password:password
        }
        dispatch(updateAuthKey(data))

    }
   
 
if(token===null){


    return (
        <div className='loginFormContainer'>
            <form className="loginForm">
                <h4>Login</h4>
                <input type='text' placeholder='Username' onChange={(e)=>setusername(e.target.value)}></input>
                <input type='text' placeholder='email' onChange={(e)=>setemail(e.target.value)}></input>
                <input type='text' placeholder='Password' onChange={(e)=>setpassword(e.target.value)}></input>
                <input type="submit" onClick={(e)=>handleSubmit(e)} className='loginBtn'></input>
                <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/'>Forgot Password?</NavLink>
            </form>
            
                
        </div>
    )}
    else{
       
        return(<Redirect to='/'></Redirect>)
    }
}

export default Login
