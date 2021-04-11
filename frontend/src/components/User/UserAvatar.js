import React from 'react';
import '../../assets/css/User.css'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';
// props will get Username USer Profile pic.
function UserAvatar(props){
const loggedInuser=useSelector(state=>state.user.userAuthDetails.pk)
   
if(props.option==='user'){
    return (
           
        <div className="user_avatar_container">
            <div className="user_avatar">
                <div className='user_profile_pic'><img src={`${process.env.PUBLIC_URL}/assets/img/bean.jpeg`} className='avatarImg'></img></div>
                <div className='verticleWrap'>
                <NavLink to={'/u/profile/'+props.user.id} className='username'>{props.user.username}</NavLink>
                <div>{props.children && props.children}</div>
                </div>
                {props.withEdit && <div style={{marginLeft:'auto',cursor:'pointer'}}><i className='bx bx-dots-vertical-rounded'></i></div>}
                
            </div>
        </div> 
    )
}
else if(props.option==='subconn'){
    return(
        <div className="user_avatar_container">
            <div className="user_avatar">
                <div className='user_profile_pic'><img src={`${process.env.PUBLIC_URL}/assets/img/bean.jpeg`} className='avatarImg'></img></div>
                <div className='verticleWrap'>
                    <NavLink to={'/s/profile/'+props.subconn.id} className='username'>{props.subconn.subconn_name}</NavLink>
                    <div>{props.children && props.children}</div>
                </div>
                {props.subconn.subconn_admin===loggedInuser?<div className='adminSticker'>Admin</div>:<div></div>}
                
            </div>
        </div> 
    )
} 
 
        
 
   


}
export default UserAvatar;