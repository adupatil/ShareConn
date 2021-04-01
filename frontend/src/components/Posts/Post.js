// import Avatar
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EngagementBar from '../Bars/EngagementBar'
import UserAvatar from '../User/UserAvatar'
import axios from 'axios'

// props=post details
function Post({postDetail}){
//   check if loggenInUSer===userDetails.id
    const loggedInuser=useSelector(state=>state.user.userDetails)
    const [postsUser,setpostUser]=useState(null)
    const post_area=()=>{
        let postType=postDetail.post_type;
        if(postType){
            return(<img src={postDetail.postType}></img>)
        }
    }

useEffect(()=>{
    console.log(loggedInuser)
    if(loggedInuser.id==postDetail.user_id){
        setpostUser(loggedInuser)
    }else{
    axios.get('http://localhost:8000/api/users/'+postDetail.user_id+'/')
        .then(user=>{
            console.log('666')
            console.log(user.data)
            setpostUser(user.data)  
            
        })}
 },[])
 console.log('%%%')
 console.log(postsUser)

console.log(postDetail)
  
  
   if(postsUser!==null){ 
      
    return(
        <div className='post'>
            <UserAvatar username={postsUser.username}>
                <div className="postDate">{postDetail.date_created.slice(0,10)}</div>
              
            </UserAvatar>
            <div className='post_container'>
                <div className="post_area_container">
                    {/* <p className="post_title">{postDetail.post_title}</p> */}
                    <div className="post_text">{postDetail.post_text}</div>
                    <div className="post_area">
                      {post_area()}  
                    </div>
                    
                </div>
               
                    <EngagementBar  postDetail={postDetail}  ></EngagementBar>
                
                

            </div>
            
        </div>
        
    )}else{
        return( <div>no</div>)
    }
}
export default Post;