import React from 'react'

function ChangePassword() {
    return (
        <div>
            <form className="loginForm">
                <h4 style={{marginBottom:'0.2rem'}}>Change Password</h4>
               
                
                <div className='inputWrapper'>
                   
                    <input id="new password_1" type='text' ></input>
                    <label for="new password_1" >New Password</label>
                </div>

                <div className='inputWrapper'>
                   
                    <input id="new password_2" type='text' ></input>
                    <label for="new password_2" >Confirm New Password</label>
                </div>
                
                <div className='inputWrapper'>
                   
                    <input type='text' id='old password' ></input>
                    <label for="old password" >Old Password</label> 

                </div>
                
                <input type="submit" className='loginBtn'></input>
                
                
        
                   
                    
        
            </form>
        </div>
    )
}

export default ChangePassword
