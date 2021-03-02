import React, { Component } from 'react';
import Button from '../Auth/Button.js'
import '../../../assets/css/Bars.css'

function NavBar(props){
return(
    <div className="nav_container">
        <nav className="navbar">
            <div className='brand'>ShareConn</div>
            <div className='auth_details'>
                <div className="user_info">
                    <div className='user_profile_pic'>{props.profile_pic}</div>
                    <div className='username'>{props.username}</div>
                </div>
                <div><Button status="LogOut"></Button></div>
                   
             
                
            </div>
        </nav>
    </div>)


}
export default NavBar;