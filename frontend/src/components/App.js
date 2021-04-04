import React,{ Fragment, useEffect, useState } from 'react';
// css
import '../assets/css/Bars.css';
import '../assets/css/Page.css'

// components
import {NavBar,SideBar} from './Bars/Bars';
import PageRoutes from './Routes/PageRoutes';
import AuthRoutes from './Routes/AuthRoutes'
import AddPost from './Posts/AddPost';
import { Redirect } from 'react-router';

// redux
import {useDispatch,useSelector} from 'react-redux';
import {fetchUser,fetch_user_authDetails} from '../features/user/userSlice'
import axios from 'axios';


function App(props) {

const loggedInUserID=useSelector(state=>state.user.userAuthDetails.pk)
const dispatch = useDispatch()
const token=localStorage.getItem('token')

useEffect(()=>{
   console.log('for token= '+token)
    if(token!==null){
        axios.defaults.headers.common['Authorization']='Token '+token;
        console.log('token auth')
        axios.get('rest-auth/user/')
        
        .then(data=>{
            console.log('updating auth details')
            dispatch(fetch_user_authDetails(data.data))})
    }

},[token])
    useEffect(()=>{
       
      console.log('loggedIn user= '+loggedInUserID)
        dispatch(fetchUser(loggedInUserID))
            
          
            
         
        
    },[loggedInUserID])

    
    
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
                <AddPost ></AddPost>
               
                
            </div>
                
            
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