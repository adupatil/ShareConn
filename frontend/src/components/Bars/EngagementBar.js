import React from 'react';
import {LikeBtn,CommentBtn} from '../Buttons/EngagementButtons'


function EngagementBar(props){
    
    
    const handleLikeUpdate=(no)=>{
      props.updateLikes(no)
    }
    
    return(
        <div className="engagementBar">
           <div className='likeBtnContainer'><LikeBtn updateLikes={(no)=>handleLikeUpdate(no)} postDetail={props.postDetail} ></LikeBtn> {props.likes}</div> 
            <div className='commentBtnContainer'><CommentBtn postDetail={props.postDetail}></CommentBtn>{props.comments}</div>
        </div>
    )
}
export default EngagementBar;