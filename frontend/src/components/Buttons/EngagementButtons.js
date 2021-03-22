import React,{useContext} from 'react';
import '../../assets/css/Buttons.css'
import { engagementContext } from '../Context';
function LikeBtn(props){
    const {likes}=useContext(engagementContext)
    const [likes1,setLikes]=likes
   
    return(
        <div className="likeBtnContainer">
            <div className='like_btn' onClick={()=>setLikes(prev=>(prev+1))}>
                <i className='bx bx-like ' ></i>
            </div>
            <div>
                {likes1}
            </div>

        </div>
        
    )
}
function CommentBtn(props){
    const {comments}=useContext(engagementContext)
    const [comments1,setComments]=comments
    return(
        <div className="commentBtnContainer">
            <div className='comment_btn' onClick={()=>setComments(prev=>prev+1)} >
                <i className='bx bx-comment ' ></i>
            </div>
            <div>
                {comments1}
            </div>

        </div>
    )
}
export {LikeBtn,CommentBtn}