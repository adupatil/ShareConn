import React, { Component } from 'react';
import AuthButton from '../Buttons/AuthButton';
import AddPostBtn from '../Buttons/AddPostBtn';
import '../../assets/css/Bars.css'

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
                <div><AuthButton status="LogOut"></AuthButton></div>
                   
             
                
            </div>
        </nav>
    </div>)


}
const sidebarElements=[
    {pageName:'home',icon:'bx bx-home'},{pageName:'notifications',icon:'bx bx-bell'},{pageName:'profile',icon:'bx bx-user'},{pageName:'settings',icon:'bx bx-wrench'}
]
function SideBar(props){
    // get which page is active
    const arr=sidebarElements.map((el,i)=>{
        
        if(props.activePage===el.pageName){
            return( <li key={i} className='active'><i className={el.icon}></i>{el.pageName}</li> )
        }else{
            return(<li key={i} ><i className={el.icon}></i>{el.pageName}</li>)
        }
    })
    
   
    return(
        <div id="sidebar_container">
            <div className='sidebar'>
                <ul className="sidebar__items">
                    {arr.map(a=>a)}
                    
                </ul>
                <AddPostBtn></AddPostBtn>
            </div>
        </div>
    )
}
export {NavBar,SideBar}