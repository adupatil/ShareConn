import React from 'react'
import '../../assets/css/Auth.css'
import '../../assets/css/responsive.css'

function ForgotPasswordResetConfirm() {
    return (
        <div className='loginFormContainer'>
            <div className='loginImgConatiner'>
                <img  alt='loginsvg'  src={process.env.PUBLIC_URL + '/assets/img/reset.svg'}></img>
            </div>
            <form className="loginForm">
                <h4 style={{marginBottom:'0.2rem'}}>Confirm Reset Password?</h4>
                
                <div className='inputWrapper'>
                   
                    <input id="password" type='text' placeholder="Password"></input>
                    <label for="password" >Password</label>
                </div>

                <div className='inputWrapper'>
                   
                    <input id="confirm password" type='text' placeholder="Confirm password"></input>
                    <label for="confirm password" >Confirm Password</label>
                </div>
                <input type="submit" className='loginBtn'></input>
            </form>
            
                
        </div>    
    )
}

export default ForgotPasswordResetConfirm
