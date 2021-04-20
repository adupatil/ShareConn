import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import UserAvatar from '../User/UserAvatar'





function Comment(props) {
    return (
        <div className='commentContainer'>
            <UserAvatar withEdit={false} user={props.comment.userDetail}> {props.comment.text}</UserAvatar>
           
        </div>
    )
}




function CommentList({postID,userDetail,postType}) {
    const loggedInuser=useSelector(state=>state.user.userProfile)
    const [newComment,setnewComment]=useState({userDetail:loggedInuser,text:''})
    const [allComments,setallComments]=useState([])
    // fetch comments for a post 


    const addNewComment=()=>{
        // api call
        if(newComment.text!==''){
            setallComments(prev=>[...prev,newComment])
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
