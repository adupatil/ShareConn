import React, { useState,useEffect } from 'react';
import '../../assets/css/Auth.css';
import {updateAuthKeyRegister} from '../../features/user/userSlice'
import {useDispatch} from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios'
import '../../assets/css/Auth.css'

function Signup() {
    const [username,setusername]=useState(null)
    const [fname,setfname]=useState(null)
    const [lname,setlname]=useState(null)
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
                first_name:fname,
                last_name:lname,
                username:username,
                email:email,
                password1:password,
                password2:confirmpassword

            }
            console.log(obj)
            dispatch(updateAuthKeyRegister(obj))
            
            
           
        
        

    }
   
 
if(token===null){


    return (
        <div className='loginFormContainer'>
            <div className='loginImgConatiner'>
                <img  alt='loginsvg'  src={process.env.PUBLIC_URL + '/assets/img/sign_in.svg'}></img>
            </div>
            <form className="loginForm">
                <h4>Sign Up</h4>
                <div style={{width:'100%',display:'flex'}}>
                    <div className='inputWrapper' style={{width:'95%'}}>
                        <input type='text' onChange={(e)=>setfname(e.target.value)}></input>
                        <label>First Name</label>

                    </div>
                    <div className='inputWrapper' style={{width:'95%'}}>
                        <input type='text' onChange={(e)=>setlname(e.target.value)}></input>
                        <label>Last Name</label>
                    </div>
                   

                </div>

                <div className='inputWrapper'>
                    <input type='text' onChange={(e)=>setusername(e.target.value)}></input>
                    <label>Username</label>
                </div>
                <div className='inputWrapper'>
                    <input type='text' onChange={(e)=>setemail(e.target.value)}></input>
                    <label>Email</label>
                </div>
                <div className='inputWrapper'>
                    <input type='text' onChange={(e)=>setpassword(e.target.value)}></input>
                    <label>Password</label>
                </div>
                <div className='inputWrapper'>
                    <input type='text' onChange={(e)=>setconfirmpassword(e.target.value)}></input>
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

