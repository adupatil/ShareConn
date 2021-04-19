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
    const handlePassword=(e)=>{
        let val = e.target.value
        const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,50}$/
        if(!re.test(val)){
            alert("Please enter a valid password")
        }
        else{
            setpassword(e.target.value)
        }
    }

    const handleEmail=(e)=>{
        let val = e.target.value
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!re.test(val)){
            alert("Enter a valid email")
        }
        else{
            setemail(e.target.value)
        }

    }
   
 



    return (
        <div className='loginFormContainer'>
            <div className='loginImgConatiner'>
                <img  alt='loginsvg'  src={process.env.PUBLIC_URL + '/assets/img/mobile_login.svg'}></img>
            </div>
            <form className="loginForm">
                <h4 style={{marginBottom:'0.2rem'}}>Login</h4>
                <div>
                  
                    <div className='otherSocialLinks' style={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}>
                            <i className='bx bxl-facebook-square' style={{fontSize:'xx-large'}}></i>
                    </div>
                </div>
                
                <div className='inputWrapper'>
                   
                    <input id="username" required type='text'  onChange={(e)=>setusername(e.target.value)}></input>
                    <label for="username" >Username</label>
                </div>

                <div className='inputWrapper'>
                   
                    <input id="email" type='text' required onBlur={(e)=>handleEmail(e)}></input>
                    <label for="email" >E-mail</label>
                </div>
                
                <div className='inputWrapper'>
                   
                    <input type='password' id='pw' required onBlur={(e)=>handlePassword(e)}></input>
                    <label for="pw">Password</label>

                </div>
                
                <input type="submit" onClick={(e)=>handleSubmit(e)} className='loginBtn'></input>
                <div style={{display:'flex',marginTop:'0.4rem'}}>
                    <NavLink style={{marginRight:'1rem'}} to='/signup'>Create new account</NavLink>
                    <NavLink to='/forgotPassword'>Forgot Password?</NavLink>
                </div>
                
        
                   
                    
        
            </form>
            
                
        </div>
    )
    
}

export default Login
