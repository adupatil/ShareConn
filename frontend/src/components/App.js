import React,{ useEffect, useState } from 'react';
// css
import '../assets/css/Bars.css';
import '../assets/css/Page.css'

// components
import {NavBar,SideBar} from './Bars/Bars';
import Home from './Pages/Home'
import PageRoutes from './Routes/PageRoutes'
import AddPost from './Posts/AddPost'

// redux
import {useDispatch,useSelector} from 'react-redux';

import {selectUser,fetchUser,fetchUserProfile,fetchUsersFollowing} from '../features/user/userSlice'
import {fetchUserPosts} from '../features/posts/postSlice'

function App(props) {
const uid='1'
    const addPostStyle=useSelector(state=>state.posts.addPost)
 const dispatch = useDispatch()
    useEffect(()=>{
        console.log('in effect')
        dispatch(fetchUser(uid))
        dispatch(fetchUserProfile(uid))
        dispatch(fetchUserPosts(uid))
        dispatch(fetchUsersFollowing(uid))
        
         
         
     },[])
    
    // const [userDetail,setUserDetail]=useState({})
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
    
}
export default App;