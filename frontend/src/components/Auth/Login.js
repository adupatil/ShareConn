import React, { useState,useEffect } from 'react';
import '../../assets/css/Auth.css';

import { NavLink, Redirect } from 'react-router-dom';
import {updateAuthKey} from '../../features/user/userSlice'
import { useDispatch } from 'react-redux';
import '../../assets/css/Auth.css'
import '../../assets/css/responsive.css'


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
   
 



    return (
        <div className='loginFormContainer'>
            <div className='loginImgConatiner'>
                <img  alt='loginsvg'  src={process.env.PUBLIC_URL + '/assets/img/mobile_login.svg'}></img>
            </div>
            <form className="loginForm">
                <h4 style={{marginBottom:'0.2rem'}}>Login</h4>
                <div>
                  
                    <div className='otherSocialLinks' style={{display:'flex',justifyContent:'center'}}>
                            <i className='bx bxl-facebook-square' style={{fontSize:'xx-large'}}></i>
                    </div>
                </div>
                
                <div className='inputWrapper'>
                   
                    <input id="username" type='text'  onChange={(e)=>setusername(e.target.value)}></input>
                    <label for="username" >Username</label>
                </div>

                <div className='inputWrapper'>
                   
                    <input id="email" type='text'  onChange={(e)=>setemail(e.target.value)}></input>
                    <label for="email" >E-mail</label>
                </div>
                
                <div className='inputWrapper'>
                   
                    <input type='text' id='pw' onChange={(e)=>setpassword(e.target.value)}></input>
                    <label for="pw" >Password</label> 

                </div>
                
                <input type="submit" onClick={(e)=>handleSubmit(e)} className='loginBtn'></input>
                <div style={{display:'flex',marginTop:'0.4rem'}}>
                    <NavLink style={{marginRight:'1rem'}} to='/signup'>Create new account</NavLink>
                    <NavLink to='/'>Forgot Password?</NavLink>
                </div>
                
        
                   
                    
        
            </form>
            
                
        </div>
    )
    
}

export default Login
