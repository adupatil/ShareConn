// import Avatar
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EngagementBar from '../Bars/EngagementBar'
import UserAvatar from '../User/UserAvatar'
import axios from 'axios'
import SubConnAvatar from '../SubConn/SubConnAvatar';
import {increment_post_likes,decrement_post_likes} from '../../features/posts/postSlice'
import { NavLink, Redirect } from 'react-router-dom';

function Post({postDetail,postType,userDetails}){

    const loggedInuser=useSelector(state=>state.user.userProfile)
    // states for post
    const [postsUser,setpostUser]=useState(null)
    const [likes,setlikes]=useState(postDetail.num_likes)
    const [comments,setcomments]=useState(postDetail.num_comments)
    const [edit,setedit]=useState(false)
    const dispatch=useDispatch()
    const post_area=()=>{
        let postType=postDetail.post_type;
        if(postType!==null){
    
            if(postType.includes('.png') || postType.includes('.jpg') || postType.includes('.jpeg') ){
                return(<img src={postType}></img>)
            }else if(postType.includes('.mp3') || postType.includes('.mp4')){
                return(<video width='400' controls>
                    <source type={'video/'+postType.substring(postType.length,postType.length-3)} src={postType}></source>
                </video>)
            }
        }
        
    }

useEffect(()=>{
 
    if(loggedInuser.id==postDetail.user_id){
        setedit(true)
        setpostUser(loggedInuser)
    }else{
        if(postType==='user'){
            axios.get('api/users_profile/'+postDetail.user_id+'/')

            .then(user=>{
                console.log('user of the post')
                setpostUser(user.data)  
        })}
        else if(postType==='subconn'){
          
           axios.get(`api/subconns/${postDetail.subconn}/`)
           .then(res=>{
               console.log('subconn of the post')
               console.log(res.data)
               setpostUser(res.data)
           })
        }
    }
    
 },[postDetail])

 const handleSetLikes=(no)=>{
     if(no===-1){
       
        axios.get('api/posts_likes/')
         .then(res=>{
            let liked=res.data.filter(el=>el.user_id===parseInt(loggedInuser.id) && el.post_id===parseInt(postDetail.id))
            if(liked.length===1){
                axios.delete('api/posts_likes/'+liked[0].id+'/')
                .then(res=>{
                    dispatch(decrement_post_likes({option:postType==='user'?'user_posts':'followed_posts',post_id:postDetail.id}))
                    setlikes(prev=>prev-1)})
            }
            })
       
     }else{
  
        
         axios.post('api/posts_likes/',{'post_id':parseInt(postDetail.id),'user_id':parseInt(loggedInuser.id)})
         .then(data=>{
             dispatch(increment_post_likes({option:postType==='user'?loggedInuser.id===postDetail.user_id?'user_posts':'followed_posts':'',post_id:postDetail.id}))
             setlikes(prev=>prev+1)})
     }
 }
   
 const redirect=()=>{
     return(
         <Redirect to={'/posts/'+postDetail.id}></Redirect>
     )
 }
    



  
  
   if(postsUser!==null && Object.keys(loggedInuser).length>0){ 
      
    return(
     
        <div className='post' onClick={redirect}>
           {postType==='user'? <UserAvatar user={postsUser}  withEdit={true}>
                
                <div className="postDate">{postDetail.date_created.slice(0,10)}</div>
               
            </UserAvatar>:<SubConnAvatar option='postAvatar' subconn={postDetail} subconnProfile={postsUser} withEdit={true} >
            <div className="postDate">{postDetail.date_created.slice(0,10)}</div> </SubConnAvatar>}
            <NavLink to={postType==='user'?'/u/posts/'+postDetail.id:'/s/posts/'+postDetail.id} option={postType} >
                <div className='post_container'>
                <div className="post_text">{postDetail.post_title}</div>
                    <div className="post_area_container">
                        
                    
                        <div className="post_area">
                        {post_area()}  
                        </div>
                        
                    </div>
                
            
                    
                    

                </div>

            </NavLink>
           
            <EngagementBar  postDetail={postDetail} likes={likes}  comments={comments} userDetails={postsUser} updateLikes={(no)=>handleSetLikes(no)}></EngagementBar>
            
        </div>
     
        
    )}else{
        return( <div>no post</div>)
    }
}
export default Post;