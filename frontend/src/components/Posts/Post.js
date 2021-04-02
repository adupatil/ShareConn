// import Avatar
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EngagementBar from '../Bars/EngagementBar'
import UserAvatar from '../User/UserAvatar'
import axios from 'axios'

function Post({postDetail}){

    const loggedInuser=useSelector(state=>state.user.userDetails)
    // states for post
    const [postsUser,setpostUser]=useState(null)
    const [likes,setlikes]=useState(postDetail.num_likes)
    const [comments,setcomments]=useState(postDetail.num_comments)
    
    const post_area=()=>{
        let postType=postDetail.post_type;
        if(postType){
            return(<img src={postDetail.postType}></img>)
        }
    }

useEffect(()=>{
 
    if(loggedInuser.id==postDetail.user_id){
        setpostUser(loggedInuser)
    }else{
    axios.get('http://localhost:8000/api/users/'+postDetail.user_id+'/')
        .then(user=>{
            setpostUser(user.data)  
    })}
 },[postsUser])

 const handleSetLikes=(no)=>{
     if(no===-1){
        console.log('like decrement')
        setlikes(prev=>prev-1)
     }else{
         console.log('like incremen')
         axios.post('api/posts_likes/',{post_id:postDetail.id,user_id:postsUser.id})
         .then(data=>setlikes(prev=>prev+1))
     }
 }
   
    



  
  
   if(postsUser!==null){ 
      
    return(
        <div className='post'>
            <UserAvatar user={postsUser}>
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
               
                <EngagementBar  postDetail={postDetail} likes={likes}  comments={comments} userDetails={postsUser} updateLikes={(no)=>handleSetLikes(no)}></EngagementBar>
                
                

            </div>
            
        </div>
        
    )}else{
        return( <div>no post</div>)
    }
}
export default Post;