import React, { useState } from 'react'
import { withRouter } from 'react-router'
import '../../assets/css/Auth.css'
import '../../assets/css/responsive.css'
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';


function ChangePassword() {
    const [password,setpassword]=useState(undefined)
    const [confirmpassword,setconfirmpassword]=useState(undefined)
    const [oldpassword,setoldpassword]=useState(undefined);

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

    const handleOldPassword=(e)=>{
        let val = e.target.value
        const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,50}$/
        if(!re.test(val)){
            alert("Please enter a valid password")
        }
        else{
            setoldpassword(e.target.value)
     }
    }

    const handleSubmit=(e)=>{
        let obj = new FormData()
        obj.append('new_password1',password)
        obj.append('new_password2',confirmpassword)
        obj.append('old_password',oldpassword)

        axios.post('rest-auth/password/change/',obj,{headers:{'Content-Type':'multipart/form-data'}})
            .then(res=>{
                alert("Password updated")
                return(<Redirect to='/'></Redirect>)
               }) 

    }


    return (
        <div>
            <form className="loginForm">
                <h4 style={{marginBottom:'0.2rem'}}>Change Password</h4>
               
                
                <div className='inputWrapper'>
                   
                    <input id="new password_1" onBlur={e=>handlePassword(e)} type='text' ></input>
                    <label for="new password_1" >New Password</label>
                </div>

                <div className='inputWrapper'>
                   
                    <input id="new password_2" onBlur={e=>handleConfirmPassword(e)} type='text' ></input>
                    <label for="new password_2" >Confirm New Password</label>
                </div>
                
                <div className='inputWrapper'>
                   
                    <input type='text' onBlur={e=>handleOldPassword(e)} id='old password' ></input>
                    <label for="old password" >Old Password</label> 

                </div>
                
                <input type="submit" onClick={e=>handleSubmit(e)} className='loginBtn'></input>
                
            </form>
        </div>
    )
}

export default ChangePassword
