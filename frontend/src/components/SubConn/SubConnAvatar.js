import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'

function SubConnAvatar(props) {
    const loggedInuser=useSelector(state=>state.user.userAuthDetails.pk)
    if(props.option==="postAvatar"){
        return(
            <div className="user_avatar_container">
                <div className="user_avatar">
                    <div className='user_profile_pic'><img alt="subconn profile" src={props.subconnProfile.profile_pic}></img></div>
                    <div className='verticleWrap'>
                        <NavLink to={'/s/profile/'+props.subconnProfile.id} className='username'>{props.subconnProfile.subconn_name}</NavLink>
                        
                        <div>{props.children && props.children}</div>
                    </div>
                    {props.subconnProfile.subconn_admin===loggedInuser?<div className='adminSticker'>Admin</div>:<div></div>}
                    
                </div>
            </div> 
        )

    }else if(props.option==='followList'){
        return(
            <div className="user_avatar_container">
                <div className="user_avatar">
                    <div className='user_profile_pic'><img  alt="subconn profile" src={props.subconnProfile.profile_pic}></img></div>
                    <div className='verticleWrap'>
                        <NavLink to={'/s/profile/'+props.subconnProfile.id} className='username'>{props.subconnProfile.subconn_name}</NavLink>
                        
                        <div>{props.children && props.children}</div>
                    </div>
                    {props.subconnProfile.subconn_admin===loggedInuser?<div className='adminSticker'>Admin</div>:<div></div>}
                    
                </div>
            </div> 
        )

    }
      
    
        
}

export default SubConnAvatar
