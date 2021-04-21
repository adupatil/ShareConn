import React, { useState } from 'react'
import { withRouter } from 'react-router'
import '../../assets/css/Auth.css'
import '../../assets/css/responsive.css'
import { NavLink, Redirect } from 'react-router-dom';

function ForgotPassword() {
    const [email,setemail]=useState(undefined)

    // const handleEmail=(e)=>{
    //     let val = e.target.value
    //     const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    //     if(!re.test(val)){
    //         alert("Enter a valid email")
    //     }
    //     else{
    //         setemail(e.target.value)
    //     }

    // }
    const handleSubmit=()=>{
        
            const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if(!re.test(val)){
                alert("Enter a valid email")
            }else{
                console.log(email)
            //    axios.post('url',{email:email})
            //    .then(res=>{
            //        return(<Redirect to='/'></Redirect>)
            //    }) 
            }
    }

    return (
        <div className='loginFormContainer'>
            <div className='loginImgConatiner'>
                <img  alt='loginsvg'  src={process.env.PUBLIC_URL + 'assets/img/undraw_forgot_password_gi2d.svg'}></img>
            </div>
            <form className="loginForm" onSubmit={handleSubmit}>
                <h4 style={{marginBottom:'0.2rem'}}>Forgot Password?</h4>
                
                <div className='inputWrapper'>
                   
                    <input id="email" type='text' onChange={(e)=>setemail(e.target.value)}></input>
                    <label for="email" >E-mail</label>
                </div>
                <input type="submit"  className='loginBtn'></input>
            </form>
            <NavLink to="/forgotpasswordresetconfirm" style={{color:'black'}}>Reset Confirm</NavLink>
        </div>    )
}

export default ForgotPassword
