import React, { Component, useEffect, useState } from 'react';

import AddPostBtn from '../Buttons/AddPostBtn';
import {NavLink, Redirect} from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux'
import '../../assets/css/Bars.css';
import {logout_user as clearPosts} from '../../features/posts/postSlice'
import {logout_user as clearUser, toggleSubconnForm} from '../../features/user/userSlice'

import '../../assets/css/Buttons.css'
import axios from 'axios';
import SubConnAvatar from '../SubConn/SubConnAvatar';


// Bars need to get user values

function NavBar(props){
    const userProfile=useSelector(state=>state.user.userProfile)
   const dispatch = useDispatch()
    const logoutUser=()=>{
       localStorage.removeItem('token')
        dispatch(clearPosts())
        dispatch(clearUser())
        window.location.replace('/login')
        
    }
if(Object.keys(userProfile).length>0){
    return(
        <div className="nav_container">
            <nav className="navbar">
                <NavLink to='/' className='brand'>
                    <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} style={{height:'2rem'}}></img>
                </NavLink>
                <div className='auth_details'>
                    <div className="user_info">
                        <div className='user_profile_pic'><img src={userProfile.profile_pic}></img></div>
                        <NavLink to={`/u/profile/${userProfile.id}`} className='username'>{userProfile.user.username}</NavLink>
                    </div>
                    <div className=" button orangeBtn auth_btn" onClick={logoutUser}>Logout</div>
                       
                 
                    
                </div>
            </nav>
        </div>)

} else{
    return <div></div>
} 



}
const sidebarElements=[
    {pageName:'home',icon:'bx bx-home',routeName:'/'},{pageName:'profile',icon:'bx bx-user',routeName:'/profile'},{pageName:'settings',icon:'bx bx-wrench',routeName:'/settings'}
]
function SideBar(props){
    // get which page is active
     const dispatch = useDispatch()
    
    const options=useSelector(state=>state.user.subconns_admined);

    const user=useSelector(state=>state.user)
    const activeStyle={
        color:'var(--primaryColor)',
       
        borderRadius:'1000px'
    }
   
    const showSubconnForm=()=>{
        dispatch(toggleSubconnForm('flex'))
       
    }
    
   
    const arr=sidebarElements.map((el,i)=>{ 
    if(el.pageName==='profile' ){
    
        return(<NavLink exact to={`/u${el.routeName}/${user.userAuthDetails.pk}`} key={i} activeStyle={activeStyle}><i className={el.icon}></i>{el.pageName}</NavLink >)
    }else{
        return(<NavLink exact to={el.routeName} key={i} activeStyle={activeStyle}><i className={el.icon}></i>{el.pageName}</NavLink >)
    }
     })
     

    
    
       
       
   
    
   
    return(
        <div id="sidebar_container">
            <div className='sidebar'>
                <ul className="sidebar__items">
                    {arr}
                    
                    
                </ul>
                
               
                <AddPostBtn ></AddPostBtn>

                <div className='adminedSubconns' style={{marginTop:'2rem'}}>
                <div style={{padding:'1rem',fontWeight:'bolder'}}>Subconns you admin</div>
                <div>
                    
                    {options.map(opt=><SubConnAvatar option='followList' subconnProfile={opt}></SubConnAvatar>)}
                    <div className='createNewSubconn'>
                        <div className='createSubconnbtn' onClick={showSubconnForm}>Create new SubConn</div>
                    </div>
                </div>
           
            </div>
            </div>
        </div>
    )
}
export {NavBar,SideBar}