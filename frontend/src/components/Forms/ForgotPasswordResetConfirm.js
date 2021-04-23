import React, { useState } from 'react'
import '../../assets/css/Auth.css'
import '../../assets/css/responsive.css'
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';


function ForgotPasswordResetConfirm() {
    const [password,setpassword]=useState(undefined)
    const [confirmpassword,setconfirmpassword]=useState(undefined)
    const [token,setToken]=useState(undefined);

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

        const submitHandler=(e)=>{
            axios.post('rest-auth/password/reset/confirm/',{new_password1:password,new_password2:confirmpassword,uid:"NA",token:token})
            .then(res=>{
                return(<Redirect to='/login'></Redirect>)
               }) 
            }

        return (
        <div className='loginFormContainer'>
            <div className='loginImgConatiner'>
                <img  alt='loginsvg'  src={process.env.PUBLIC_URL + '/assets/img/reset.svg'}></img>
            </div>
            <form className="loginForm">
                <h4 style={{marginBottom:'0.2rem'}}>Confirm Reset Password?</h4>
                
                <div className='inputWrapper'>
                   
                    <input id="password" onBlur={e=>handlePassword(e)} type='password' placeholder="Password"></input>
                    <label for="password" >Password</label>
                </div>

                <div className='inputWrapper'>
                   
                    <input id="confirm password" onBlur={e=>handleConfirmPassword(e)} type='password' placeholder="Confirm password"></input>
                    <label for="confirm password" >Confirm Password</label>
                </div>

                <div className='inputWrapper'>
                   
                    <input id="token" onBlur={e=>setToken(e.target.value)} type='text' placeholder="token"></input>
                    <label for="token" >Token</label>
                </div>

                <input type="submit" onClick={e=>submitHandler(e)} className='loginBtn'></input>
            </form>
            
                
        </div>    
    )
}

export default ForgotPasswordResetConfirm
