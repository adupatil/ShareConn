import React, { Component, Fragment, useEffect, useState } from 'react';

import AddPostBtn from '../Buttons/AddPostBtn';
import {NavLink} from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux'
import '../../assets/css/Bars.css';
import {logout_user as clearPosts} from '../../features/posts/postSlice'
import {logout_user as clearUser, toggleSubconnForm} from '../../features/user/userSlice'

import '../../assets/css/Buttons.css'
import axios from 'axios';
import SubConnAvatar from '../SubConn/SubConnAvatar';

import UserAvatar from '../User/UserAvatar';


// Bars need to get user values

function NavBar(props){
    
    const userProfile=useSelector(state=>state.user.userProfile)
    // state
    const [search,setsearch]=useState('')
    const [searchResults,setsearchResults]=useState([])
    const [postUsers,setpostUsers]=useState([])
    
    const [option,setoption]=useState('')
    const handleSubmit=()=>{
        let opt=search.slice(0,1)
        if(opt==='s'){
            axios.get(`search_subconns?search=${search.slice(2,)}&order=-date_created`)
            .then(res=>{
                console.log(res.data)
                setsearchResults(res.data)
                setoption('subconn')
               
         
            })
        }else if(opt==='u'){
            axios.get(`search_users?search=${search.slice(2,)}`)
            .then(res=>{
                console.log(res.data)
                setsearchResults(res.data)
                setoption('user')
               
            })
        }else if(opt==='p'){
            axios.get(`search_posts?search=${search.slice(2,)}&order=-date_created`)
            .then(res=>{
                console.log(res.data)
                setsearchResults(res.data)
                setoption('post')
              
            })
        }
      
    }

    const handleSearch=(e)=>{
   
    
        if(e.charCode==13){
           
            handleSubmit()
        }
    }

   const dispatch = useDispatch()
    const logoutUser=()=>{
       localStorage.removeItem('token')
        dispatch(clearPosts())
        dispatch(clearUser())
        window.location.replace('/login')
        
    }
    
    const renderElements=()=>{
        if(option==='user'){
           return searchResults.map(res=><UserAvatar user={res}></UserAvatar>)
        }else if(option==='subconn'){
            return searchResults.map(res=><SubConnAvatar subconnProfile={res} option='postAvatar'></SubConnAvatar>)
        }
        else if(option==='post'){
            searchResults.forEach(res=>{
                axios.get('api/users_profile/'+res.user_id+'/')
                .then(res=>{
                    setpostUsers(prev=>[...prev,res.data])
                })
            })
            
            return postUsers.map(user=><UserAvatar user={user}></UserAvatar>)
        }
    }
       
        
  
if(Object.keys(userProfile).length>0){
    return(
        <Fragment>

       
        <div className="nav_container" >
            <nav className="navbar">
                <NavLink to='/' className='brand'>
                    <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} style={{height:'2rem'}}></img>
                </NavLink>
                <div style={{flexGrow:1}} >
                    <input type='text' placeholder="Search" value={search} className="searchBar" onChange={(e)=>setsearch(e.target.value)} onKeyPress={handleSearch}></input>
                </div>
                
                <div className='auth_details' onClick={()=>setsearchResults([])}>
                    <div className="user_info">
                        <div className='user_profile_pic'><img src={userProfile.profile_pic}></img></div>
                        <NavLink to={`/u/profile/${userProfile.id}`} className='username'>{userProfile.user.username}</NavLink>
                    </div>
                    <div className=" button orangeBtn auth_btn" onClick={logoutUser}>Logout</div>
                       
                 
                    
                </div>
            </nav>
        </div>
        {searchResults.length>0 && <div className='searchList'>
            <h5 style={{margin:0,marginBottom:'1rem',color:'var(--inverseModeColor)',textTransform:'capitalize'}}>
                {option}s Searched</h5>
            {renderElements()}
          
        
        </div>}
        </Fragment>
        
        
        )

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