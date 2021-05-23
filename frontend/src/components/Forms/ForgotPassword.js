import React, { useState } from 'react'
import { withRouter } from 'react-router'
import '../../assets/css/Auth.css'
import '../../assets/css/responsive.css'
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
    const [email,setemail]=useState(undefined)

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
    const handleSubmit=(e)=>{
        
            axios.post('rest-auth/password/reset/',{email:email})
            alert("Email has been sent with token for password reset")
            // .then(res=>{
            //     
            //    }) 
            }


    return (
        <div className='loginFormContainer'>
            <div className='loginImgConatiner'>
                <img  alt='loginsvg'  src={process.env.PUBLIC_URL + 'assets/img/undraw_forgot_password_gi2d.svg'}></img>
            </div>
            <form className="loginForm" >
                <h4 style={{marginBottom:'0.2rem'}}>Forgot Password?</h4>
                
                <div className='inputWrapper'>
                   
                    <input id="email" type='text' onBlur={(e)=>handleEmail(e)}></input>
                    <label for="email" >E-mail</label>
                </div>
                <input type="submit"  onClick={e=>handleSubmit(e)} className='loginBtn'></input>
            </form>
            <NavLink to="/forgotpasswordresetconfirm" style={{color:'white'}}>Reset Confirm</NavLink>
        </div>    )
}

export default ForgotPassword
