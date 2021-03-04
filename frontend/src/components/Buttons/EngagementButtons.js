import React from 'react';
import '../../assets/css/Buttons.css'

function LikeBtn(props){
    return(
        <button className='like_btn'>
            <i class='bx bx-like ' ></i>
            
            {props.likes}
        </button>
    )
}
function CommentBtn(props){
    return(
        <button className="comment_btn">
            <i class='bx bx-comment ' ></i>{props.comments} 
        </button>
    )
}
export {LikeBtn,CommentBtn}