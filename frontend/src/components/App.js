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

import {selectUser,fetchUser,fetchUserProfile,fetchUsersFollowing} from '../features/user/userSlice'
import {fetchUserPosts} from '../features/posts/postSlice'

function App(props) {

const loggedInUserID=useSelector(state=>state.user.userAuthDetails.pk)


// const loggedInUserID=useSelector(state=>state.user.userAuthDetails.pk)
//  const addPostStyle=useSelector(state=>state.posts.addPost)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('in effect')
        dispatch(fetchUser(loggedInUserID))
        dispatch(fetchUserProfile(loggedInUserID))
        dispatch(fetchUserPosts(loggedInUserID))
        dispatch(fetchUsersFollowing(loggedInUserID))
        
         
         
     },[loggedInUserID])
    
  if(loggedInUserID){
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