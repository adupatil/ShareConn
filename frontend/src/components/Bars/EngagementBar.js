import React from 'react';
import {LikeBtn,CommentBtn} from '../Buttons/EngagementButtons'
function EngagementBar(props){
    return(
        <div className="engagementBar">
            <LikeBtn likes={props.count.likes}></LikeBtn>
            <CommentBtn comments={props.count.comments}></CommentBtn>
        </div>
    )
}
export default EngagementBar;