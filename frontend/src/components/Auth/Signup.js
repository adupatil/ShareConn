import React, { useState,useEffect } from 'react';
import '../../assets/css/Auth.css';

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

    
   
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       
            let obj={
                username:username,
                email:email,
                password1:password,
                password2:confirmpassword

            }
            console.log(obj)
            axios.post('rest-auth/registration/',obj)
            .then(res=>{
            console.log(res)
            return(<Redirect to='/login'></Redirect>)})
            .catch(err=>{
                if(err.request){
                    console.log('req')
                    console.log(err)
                }else if(err.response){
                    console.log('res')
                    console.log(err)
                }
            })
           
        
        

    }
   
 
if(token===null){


    return (
        <div className='signupFormContainer'>
            <form className="signupForm">
                <h4>Sign Up</h4>
                <input type='text' placeholder='Username' onChange={(e)=>setusername(e.target.value)}></input>
                
                
                <input type='text' placeholder='email' onChange={(e)=>setemail(e.target.value)}></input>
                <input type='text' placeholder='Password' onChange={(e)=>setpassword(e.target.value)}></input>
                <input type='text' placeholder='Confirm Password' onChange={(e)=>setconfirmpassword(e.target.value)}></input>
                <input type="submit" onClick={(e)=>handleSubmit(e)} className='signupBtn'></input>
                <NavLink to='/login'>Already have an accout?</NavLink>
            
            </form>
            
                
        </div>
    )}
    else{
        alert("Already logged in")
        return(<Redirect to='/'></Redirect>)
    }
}

export default Signup

