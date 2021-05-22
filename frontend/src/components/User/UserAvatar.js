import React, { Fragment, useState } from 'react';
import '../../assets/css/User.css'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';
// props will get Username USer Profile pic.
function UserAvatar(props){
  

   
    
    const deletePostReq=()=>{
        props.deletePost()
    }
    const editPostReq=()=>{
        console.log('edittt')
        props.redirectEdit()
    }
    
   
    
    return (
           
        <div className="user_avatar_container">
            <div className="user_avatar">
                <div className='user_profile_pic'><img src={props.user.profile_pic} className='avatarImg'></img></div>
                <div className='verticleWrap'>
                    <NavLink to={'/u/profile/'+props.user.id} className='username'>{props.user.user.first_name} {props.user.user.last_name} <span style={{fontSize:'smaller',color:'gray'}}>@{props.user.user.username}</span></NavLink>

                    <div>
                        {props.children && props.children}
                    </div>
                </div>
                {props.withEdit && <div style={{display:'flex',marginLeft:'auto'}}>

                    <div style={{marginLeft:'auto',cursor:'pointer',marginTop:'auto',marginBottom:'auto'}} onClick={deletePostReq}><i class='bx bx-trash'></i></div>

                    <div style={{marginLeft:'auto',cursor:'pointer',marginTop:'auto',marginBottom:'auto'}} onClick={editPostReq}><i class='bx bxs-edit' ></i></div>

                </div>}
                
            </div>
        </div> 
    )


 
    }  
 
   



export default UserAvatar