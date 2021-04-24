import React, { useState } from 'react';
import '../../assets/css/User.css'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';
// props will get Username USer Profile pic.
function UserAvatar(props){
    const [editBox,seteditBox]=useState(false)

    const handleeditBox=()=>{
        seteditBox(prev=>!prev)
    }
    // const getEditBox=()=>{
    //     if(props.withEdit===true){
    //         return(
    //             <div className="editBox">
    //                 <div><i class='bx bx-edit'></i> Edit</div>
    //                 <div style={{color:'red'}}><i class='bx bx-trash' ></i>Delete</div>
                    
    //             </div>
    //         )
    //     }else{
    //         return(<div></div>)
    //     }
    // }
    const deletePostReq=()=>{
        props.deletePost()
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
                {props.withEdit && <div style={{marginLeft:'auto',cursor:'pointer',marginTop:'auto',marginBottom:'auto'}} onClick={deletePostReq}>
                    {/* <i className='bx bx-dots-vertical-rounded' style={{fontSize:'21px'}}></i> */}
                    Delete
                    {/* {editBox && getEditBox()} */}
                </div>}
                
            </div>
        </div> 
    )


 
    }  
 
   



export default UserAvatar