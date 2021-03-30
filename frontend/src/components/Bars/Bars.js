import React, { Component } from 'react';
import AuthButton from '../Buttons/AuthButton';
import AddPostBtn from '../Buttons/AddPostBtn';
import {NavLink} from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux'
import '../../assets/css/Bars.css'



// Bars need to get user values
function NavBar(props){
    const username=useSelector(state=>state.user.userDetails.username)
    
return(
    <div className="nav_container">
        <nav className="navbar">
            <div className='brand'>ShareConn</div>
            <div className='auth_details'>
                <div className="user_info">
                    <div className='user_profile_pic'>{props.profile_pic}</div>
                    <div className='username'>{username}</div>
                </div>
                <div><AuthButton status="LogOut"></AuthButton></div>
                   
             
                
            </div>
        </nav>
    </div>)


}
const sidebarElements=[
    {pageName:'home',icon:'bx bx-home',routeName:'/'},{pageName:'notifications',icon:'bx bx-bell',routeName:'/notifications'},{pageName:'profile',icon:'bx bx-user',routeName:'/profile'},{pageName:'settings',icon:'bx bx-wrench',routeName:'/settings'}
]
function SideBar(props){
    // get which page is active
    const user='1'
    const activeStyle={
        color:'var(--primaryColor)',
        backgroundColor: 'rgb(240,128,128,0.1)',
        borderRadius:'1000px'
    }
    const dispatch=useDispatch()
   
    const arr=sidebarElements.map((el,i)=>{ 
    if(el.pageName==='profile' ){
    
        return(<NavLink exact to={`/u${el.routeName}/${user}`} key={i} activeStyle={activeStyle}><i className={el.icon}></i>{el.pageName}</NavLink >)
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
            </div>
        </div>
    )
}
export {NavBar,SideBar}