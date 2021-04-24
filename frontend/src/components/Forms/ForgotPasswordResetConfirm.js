import React, { useState } from 'react'
import '../../assets/css/Auth.css'
import '../../assets/css/responsive.css'
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';


function ForgotPasswordResetConfirm() {
    const [password,setpassword]=useState('')
    const [confirmpassword,setconfirmpassword]=useState('')
    const [token,setToken]=useState('')
    const [uid,setuid]=useState('')

        const handlePassword=(e)=>{
            let val = e.target.value
            const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,50}$/
            if(!re.test(val)){
                alert("Please enter a valid password")
            }
            else{
                setpassword(e.target.value)
            }
            console.log(password)
    
        }
    
        const handleConfirmPassword=(e)=>{
            console.log('in handle ')
            let val = e.target.value
            const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,50}$/
            if(!re.test(val)){
                alert("Please enter a valid password")
            }
            else{
                console.log(e.target.value)
                setconfirmpassword(e.target.value)
            }
            console.log(confirmpassword)
    }

        const submitForm=(e)=>{
            e.preventDefault()
            setuid("NA")
            let obj = new FormData()
            
            obj.append('new_password1',password)
            obj.append('new_password2',confirmpassword)
            obj.append('uid',uid)
            obj.append('token',token)
            console.log(obj)

            axios.post('rest-auth/password/reset/confirm/',obj,{headers:{'Content-Type':'multipart/form-data'}})
            .then(res=>{
                return(<Redirect to='/login'></Redirect>)
               }) 
        }

        return (
        <div className='loginFormContainer'>
            <div className='loginImgConatiner'>
                <img  alt='loginsvg'  src={process.env.PUBLIC_URL + '/assets/img/reset.svg'}></img>
            </div>
            <form className="loginForm" encType="multipart/form-data" onSubmit={(e)=>submitForm(e)} method="POST">
                <h4 style={{marginBottom:'0.2rem'}}>Confirm Reset Password?</h4>
                
                <div className='inputWrapper'>
                   
                    <input id="password"  onBlur={e=>handlePassword(e)} type='password' placeholder="Password"></input>
                    <label for="password" >Password</label>
                </div>

                <div className='inputWrapper'>
                   
                    <input id="confirm password"  onBlur={e=>handleConfirmPassword(e)} type='password' placeholder="Confirm password"></input>
                    <label for="confirm password" >Confirm Password</label>
                </div>

                <div className='inputWrapper'>
                   
                    <input id="token"  onBlur={e=>setToken(e.target.value)} type='text' placeholder="token"></input>
                    <label for="token" >Token</label>
                </div>

                <input type="submit"  className='loginBtn'></input>
            </form>
            
                
        </div>    
    )
}

export default ForgotPasswordResetConfirm
