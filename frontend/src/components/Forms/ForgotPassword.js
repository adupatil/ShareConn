import React from 'react'
import { withRouter } from 'react-router'
import '../../assets/css/Auth.css'
import '../../assets/css/responsive.css'
import { NavLink, Redirect } from 'react-router-dom';

function ForgotPassword() {
    return (
        <div className='loginFormContainer'>
            <div className='loginImgConatiner'>
                <img  alt='loginsvg'  src={process.env.PUBLIC_URL + 'assets/img/undraw_forgot_password_gi2d.svg'}></img>
            </div>
            <form className="loginForm">
                <h4 style={{marginBottom:'0.2rem'}}>Forgot Password?</h4>
                
                <div className='inputWrapper'>
                   
                    <input id="email" type='text' placeholder="Email Address"></input>
                    <label for="email" >E-mail</label>
                </div>
                <input type="submit" className='loginBtn'></input>
            </form>
            <NavLink to="/forgotpasswordresetconfirm" style={{color:'black'}}>Reset Confirm</NavLink>
        </div>    )
}

export default ForgotPassword
