import React,{ Fragment, useEffect, useState } from 'react';
// css
import '../assets/css/Bars.css';
import '../assets/css/Page.css';
import '../assets/css/responsive.css'

// components
import {NavBar,SideBar} from './Bars/Bars';
import PageRoutes from './Routes/PageRoutes';
import AuthRoutes from './Routes/AuthRoutes'
import AddPost from './Posts/AddPost';
import EditProfile from './Forms/EditProfile'
import { Redirect } from 'react-router';

// redux
import {useDispatch,useSelector} from 'react-redux';
import {fetchUser,fetch_user_authDetails,fetchUserProfile} from '../features/user/userSlice';
import {addNewPost} from '../features/posts/postSlice'
import axios from 'axios';
import SearchBar from './Bars/SearchBar';
import NewSubconn from './Forms/NewSubconn'



function App(props) {

const loggedInUserID=useSelector(state=>state.user.userAuthDetails.pk)


const dispatch = useDispatch()
const token=localStorage.getItem('token')

    useEffect(()=>{
        if(token!==null){
            axios.defaults.headers.common['Authorization']='Token '+token;
            axios.get('rest-auth/user/')
            .then(data=>{
                dispatch(fetch_user_authDetails(data.data))})
        }
    },[token])


    useEffect(()=>{
        dispatch(fetchUser(loggedInUserID))
        dispatch(fetchUserProfile(loggedInUserID))
    },[loggedInUserID])
    const showPost=()=>{
        dispatch(addNewPost('flex'))
    }
    
    
  if(token){
    return(
   
       
        <div className='page'>
            <NavBar ></NavBar>
            <div className="main_area">
                <SideBar activePage='home'></SideBar>
                {/* page */}
                <div className='listContainer'>
                <PageRoutes></PageRoutes>
                </div>
                <SearchBar></SearchBar>
                
                <AddPost ></AddPost>
                <EditProfile option='user'></EditProfile>
                <NewSubconn></NewSubconn>
               
                
            </div>
                
        <div className="addPostPhn" onClick={()=>showPost()}><i className='bx bx-plus'></i></div>
        </div>
        
  

  
    )

  }else{
      return(
          <Fragment>
              <AuthRoutes></AuthRoutes>
       <Redirect to='/login'></Redirect>

          </Fragment>
       
      )
  }
    
    
}
export default App;