import React,{ useState} from 'react';
import '../../assets/css/Buttons.css'
import {useDispatch,useSelector} from 'react-redux';
import {increment_post_likes,decrement_post_likes} from '../../features/posts/postSlice'

function LikeBtn(props){
    // how tocheck if someone has like dour post 
    // if uid in user_id list of posts liked then true else false
    const [liked,setLiked]=useState(false)
    
    const post_id=props.postDetail.id;
 
    // const post=useSelector(state=> state.posts.user_posts.find(p=>p.id===post_id))
    const dispatch=useDispatch()
  
    const likedStyle={
        color:'red'
    }


   
  
//    const toggleLike=()=>{
//         if(liked){
//             dispatch(increment_post_likes({option:'user_posts',post_id:post_id}))
//        }else{
          
//         dispatch(increment_post_likes({option:'user_posts',post_id:post_id}))
//        }
//        setLiked(prev=>prev?false:true)
       
//    }
   
    return(
        <div className="likeBtnContainer" >
            <div className='like_btn' >
                <i className={`bx bx${liked?'s':''}-like `} style={liked?likedStyle:{}}></i>
            </div>
            <div>
                {props.postDetail.num_likes}
            </div>

        </div>
        
    )
}
function CommentBtn(props){
    const post_id=props.postDetail.id;
 
    const post=useSelector(state=> state.posts.user_posts.find(p=>p.id===post_id))
    
    return(
        <div className="commentBtnContainer">
            <div className='comment_btn'  >
                <i className='bx bx-comment ' ></i>
            </div>
            <div>
                {props.postDetail.num_comments}
            </div>

        </div>
    )
}
export {LikeBtn,CommentBtn}