import React, { useState,useEffect } from 'react';
import '../../assets/css/Auth.css';
import {updateAuthKeyRegister} from '../../features/user/userSlice'
import {useDispatch} from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios'
import '../../assets/css/Auth.css'

function Signup() {
    const [username,setusername]=useState(null)
    const [password,setpassword]=useState(null)
    const [confirmpassword,setconfirmpassword]=useState(null)
  
    const [email,setemail]=useState(null)
    const [token,settoken]=useState(null)
    useEffect(()=>{
        settoken(localStorage.getItem('token'))
        console.log(token)
    },[])

    
   const dispatch=useDispatch()
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       
            let obj={
                username:username,
                email:email,
                password1:password,
                password2:confirmpassword

            }
            console.log(obj)
            dispatch(updateAuthKeyRegister(obj))
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

    const handleConfirmPassword=(e)=>{
        let val = e.target.value
        const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,50}$/
        if(!re.test(val)){
            alert("Please enter a valid password")
        }
        else{
            setconfirmpassword(e.target.value)
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
   
 
if(token===null){


    return (
        <div className='loginFormContainer'>
            <div className='loginImgConatiner'>
                <img  alt='loginsvg'  src={process.env.PUBLIC_URL + '/assets/img/sign_in.svg'}></img>
            </div>
            <form className="loginForm">
                <h4>Sign Up</h4>
                <div className='inputWrapper'>
                    <input type='text' onChange={(e)=>setusername(e.target.value)}></input>
                    <label>Username</label>
                </div>
                <div className='inputWrapper'>
                    <input type='text' onBlur={(e)=>handleEmail(e)}></input>
                    <label>Email</label>
                </div>
                <div className='inputWrapper'>
                    <input type='password' onBlur={(e)=>handlePassword(e)}></input>
                    <label>Password</label>
                </div>
                <div className='inputWrapper'>
                    <input type='password' onBlur={(e)=>handleConfirmPassword(e)}></input>
                    <label>Confirm Password</label>
                </div>
                
                
                
                
             
                <input type="submit" onClick={(e)=>handleSubmit(e)} className='signupBtn'></input>
                <NavLink style={{fontSize:'smaller',color:'darkslategrey'}} to='/login'>Already have an accout?</NavLink>
            
            </form>
            
                
        </div>
    )}
    else{
        alert("Already logged in")
        return(<Redirect to='/'></Redirect>)
    }
}

export default Signup

