import React ,{useState} from 'react';
import { useSelector } from 'react-redux';
import {LikeBtn,CommentBtn} from '../Buttons/EngagementButtons'


function EngagementBar(props){
    
    
    
    const handleLikeUpdate=(no)=>{
      props.updateLikes(no)
    }
    
    return(
        <div className="engagementBar">
           <div className='likeBtnContainer'><LikeBtn updateLikes={(no)=>handleLikeUpdate(no)} postDetail={props.postDetail} ></LikeBtn> {props.postDetail.num_likes}</div> 
            <div className='commentBtnContainer'><CommentBtn postDetail={props.comments}></CommentBtn>{props.postDetail.num_comments}</div>
        </div>
    )
}
export default EngagementBar;