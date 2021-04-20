import React from 'react'
import '../../assets/css/Auth.css'
import '../../assets/css/responsive.css'

function ForgotPasswordResetConfirm() {
    return (

        // const handlePassword=(e)=>{
        //     let val = e.target.value
        //     const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,50}$/
        //     if(!re.test(val)){
        //         alert("Please enter a valid password")
        //     }
        //     else{
        //         setpassword(e.target.value)
        //     }
    
        // }
    
        // const handleConfirmPassword=(e)=>{
        //     let val = e.target.value
        //     const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,50}$/
        //     if(!re.test(val)){
        //         alert("Please enter a valid password")
        //     }
        //     else{
        //         setconfirmpassword(e.target.value)
        //     }
    
        // }

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
