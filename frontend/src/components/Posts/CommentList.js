import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment_comment } from '../../features/posts/postSlice'

import UserAvatar from '../User/UserAvatar'
import Post from './Post'





function Comment(props) {
    return (
        <div className='commentContainer'>
            <UserAvatar withEdit={false} user={props.comment.userDetail}> {props.comment.text}</UserAvatar>
           
        </div>
    )
}




function CommentList({postID,userDetail,postType,post}) {
    const loggedInuser=useSelector(state=>state.user.userProfile)
    const [newComment,setnewComment]=useState({userDetail:loggedInuser,text:''})
    const [allComments,setallComments]=useState([])
    const dispatch=useDispatch()
    // fetch comments for a post 
    useEffect(()=>{
        if(postType==='user'){
            axios.get('api/posts_comments/')
            .then(res=>{
                console.log(res.data)
                let thisPostsComments=res.data.filter(comment=>comment.post_id===parseInt(postID))
           
                thisPostsComments.forEach(comment=>{
                    console.log(comment)
                    if(comment.user_id===loggedInuser.id){
                        setallComments(prev=>[...prev,{userDetail:loggedInuser,text:comment.comment}])
                    }else{
                        axios.get('api/users_profile/'+comment.user_id+'/')
                        .then(res=>{
                            setallComments(prev=>[...prev,{userDetail:res.data,text:comment.comment}])
                        })
                    }
                })
            })
        }else{
            axios.get('api/subconns_comments/')
            .then(res=>{
                console.log(res.data)
                let thisPostsComments=res.data.filter(comment=>comment.post===parseInt(postID))
           
                thisPostsComments.forEach(comment=>{
                    console.log(comment)
                    if(comment.user===loggedInuser.id){
                        setallComments(prev=>[...prev,{userDetail:loggedInuser,text:comment.comment}])
                    }else{
                        axios.get('api/users_profile/'+comment.user+'/')
                        .then(res=>{
                            setallComments(prev=>[...prev,{userDetail:res.data,text:comment.comment}])
                        })
                    }
                })
            })
        }
    },[])


    const addNewComment=()=>{
        // api call
        if(postType==='user' && newComment.text!==''){
            axios.post('api/posts_comments/',{user_id:loggedInuser.id,post_id:postID,comment:newComment.text})
            .then(res=>{
                console.log(res.data)
                setallComments(prev=>[...prev,newComment])
                dispatch(increment_comment({option:post.user_id===loggedInuser.id?'user_posts':'followed_posts',post_id:postID}))

            })
        }else if(postType==='subconn' && newComment.text!==''){
            axios.post('api/subconns_comments/',{user:loggedInuser.id,post:postID,comment:newComment.text})
            .then(res=>{
                console.log(res.data)
                setallComments(prev=>[...prev,newComment])
                dispatch(increment_comment({option:post.user_id==='followed_posts',post_id:postID}))
            })
        }
        
          
       
        
        setnewComment(prev=>({...prev,text:''}))
    }

    return (
        <div className="commentContainer">
            <div style={{display:'flex',alignItems:'center',marginBottom:'0.5rem'}}> 
              <input type='text' placeholder="Add a comment" className='commentInput' value={newComment.text} onChange={(e)=>setnewComment(prev=>({...prev,'text':e.target.value}))}></input>
              <div onClick={addNewComment} style={{marginLeft:'0.5rem'}}>Add</div>
            </div>
          {allComments.map(comment=><Comment comment={comment} ></Comment>)}
          
        </div>
    )
}

export default CommentList
