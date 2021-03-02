import React, { Component } from 'react';
import AddPostBtn from '../Posts/AddPostBtn'
import '../../../assets/css/Bars.css'

function SideBar(props){
    return(
        <div id="sidebar_container">
            <div className='sidebar'>
                <ul className="sidebar__items">
                    <li><i class='bx bx-home'></i><a>Home</a></li>
                    <li><i class='bx bx-bell' ></i><a>Notifications</a></li>
                    <li><i class='bx bx-user' ></i><a>Profile</a></li>
                    <li><i class='bx bx-wrench'></i><a>Settings</a></li>
                    
                </ul>
                <AddPostBtn></AddPostBtn>
            </div>
        </div>
    )
}
export default SideBar;