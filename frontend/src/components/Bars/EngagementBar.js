import React, { useContext, useReducer } from 'react';
import {LikeBtn,CommentBtn} from '../Buttons/EngagementButtons'


function EngagementBar(props){
    
    

    
    return(
        <div className="engagementBar">
            <LikeBtn  postDetail={props.postDetail} ></LikeBtn>
            <CommentBtn postDetail={props.postDetail}></CommentBtn>
        </div>
    )
}
export default EngagementBar;