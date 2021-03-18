import React from 'react';
import '../../assets/css/Buttons.css'

function LikeBtn(props){
    return(
        <div className="likeBtnContainer">
            <div className='like_btn' >
                <i class='bx bx-like ' ></i>
            </div>
            <div>
                {props.likes}
            </div>

        </div>
        
    )
}
function CommentBtn(props){
    return(
        <div className="commentBtnContainer">
            <div className='comment_btn' >
                <i class='bx bx-comment ' ></i>
            </div>
            <div>
                {props.comments}
            </div>

        </div>
    )
}
export {LikeBtn,CommentBtn}