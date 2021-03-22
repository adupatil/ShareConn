import React, { useContext } from 'react';
import {LikeBtn,CommentBtn} from '../Buttons/EngagementButtons'

function EngagementBar(){
    
    return(
        <div className="engagementBar">
            <LikeBtn  ></LikeBtn>
            <CommentBtn ></CommentBtn>
        </div>
    )
}
export default EngagementBar;