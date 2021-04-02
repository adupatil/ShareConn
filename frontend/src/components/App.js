import React,{ useEffect, useState } from 'react';
// css
import '../assets/css/Bars.css';
import '../assets/css/Page.css'

// components
import {NavBar,SideBar} from './Bars/Bars';
import PageRoutes from './Routes/PageRoutes';
import AddPost from './Posts/AddPost';
import Login from './Auth/Login';

// redux
import {useDispatch,useSelector} from 'react-redux';

import {selectUser,fetchUser,fetchUserProfile,fetchUsersFollowing,fetch_user_authDetails} from '../features/user/userSlice'
import {fetchUserPosts} from '../features/posts/postSlice'
import axios from 'axios';

function App(props) {
const userDetails=useSelector(state=>state.user.userDetails)
const userProfile=useSelector(state=>state.user.userProfile)
const userPosts=useSelector(state=>state.posts.user_posts)
const loggedInUserID=useSelector(state=>state.user.userAuthDetails.pk)
const dispatch = useDispatch()
const token=localStorage.getItem('token')
useEffect(()=>{
    console.log('for token')
 
    if(token){
        console.log('updating auth details')
        axios.defaults.headers.common['Authorization']='Token '+token;
        axios.get('rest-auth/user/')
        .then(data=>{
            console.log("(*&^%$#@!@#$%^&")
            console.log(data.data)
            dispatch(fetch_user_authDetails(data.data))})
    }

},[token])

    useEffect(()=>{
        console.log('in effect')
        console.log(loggedInUserID)
      
        dispatch(fetchUser(loggedInUserID))
            dispatch(fetchUserProfile(loggedInUserID))
            dispatch(fetchUserPosts(loggedInUserID))
            dispatch(fetchUsersFollowing(loggedInUserID))
        
    },[loggedInUserID])
     console.log('lOOGG APP')
     console.log(loggedInUserID)
    
  if(loggedInUserID && Object.keys(userDetails).length>0 && Object.keys(userProfile).length>0 && userPosts.length>=0){
    return(
   
       
        <div className='page'>
            <NavBar ></NavBar>
            <div className="main_area">
                <SideBar activePage='home'></SideBar>
                {/* page */}
                <div className='listContainer'>
                <PageRoutes></PageRoutes>
               
                </div>
                <AddPost ></AddPost>
               
                
            </div>
                
            
        </div>
        
  

  
    )

  }else{
      return(
          <Login></Login>
      )
  }
    
    
}
export default App;