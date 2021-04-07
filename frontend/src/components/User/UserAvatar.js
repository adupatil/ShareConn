import React from 'react';
import '../../assets/css/User.css'
import {NavLink} from 'react-router-dom'
// props will get Username USer Profile pic.
function UserAvatar(props){
   
if(props.option==='user'){
    return (
           
        <div className="user_avatar_container">
            <div className="user_avatar">
                <div className='user_profile_pic'><img src={`${process.env.PUBLIC_URL}/assets/img/bean.jpeg`} className='avatarImg'></img></div>
                <div className='verticleWrap'>
                <NavLink to={'/u/profile/'+props.user.id} className='username'>{props.user.username}</NavLink>
                <div>{props.children[0]}</div>
                </div>
                <div>{props.children[1]}</div>
                
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
                <div>{props.children}</div>
                </div>
                
            </div>
        </div> 
    )
} 
 
        
 
   


}
export default UserAvatar;