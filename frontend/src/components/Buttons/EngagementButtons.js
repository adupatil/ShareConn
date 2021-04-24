import React,{ useState,useEffect} from 'react';
import '../../assets/css/Buttons.css'
import {useSelector} from 'react-redux';

import axios from 'axios';

function LikeBtn(props){
    // how tocheck if someone has like dour post 
    // if uid in user_id list of posts liked then true else false
    const [liked,setLiked]=useState(false)
    const loggedInUserID=useSelector(state=>state.user.userAuthDetails.pk)
    const post_id=props.postDetail.id;
    let postType=('subconn' in props.postDetail)?'subconn':'user'
    useEffect(() => {
        if(postType==='user'){
            axios.get('api/posts_likes/')
            .then(res=>{
            
                let liked=res.data.filter(el=>(el.user_id==loggedInUserID&& el.post_id==post_id))
            
                if(liked.length!==0){
                    setLiked(true)
                }
            })

        }else{
            axios.get('api/subconns_likes/')
            .then(res=>{
            
                let liked=res.data.filter(el=>(el.user==loggedInUserID&& el.post==post_id))
            
                if(liked.length!==0){
                    setLiked(true)
                }
            })

        }
        
    }, [])
    
    
  
    const likedStyle={
        color:'red'
    }


   
  
   const toggleLike=()=>{
        if(liked){
        //    decrement
        props.updateLikes(-1)
       }else{
        props.updateLikes(1)
    //    increment
       }
       setLiked(prev=>prev?false:true)
       
   }
   
    return(
        
            <div className='like_btn' onClick={toggleLike}>
                <i className={`bx bx${liked?'s':''}-like `} style={liked?likedStyle:{}}></i>
            </div>
            

        
        
    )
}
function CommentBtn(props){
    const post_id=props.postDetail.id;
 
    const post=useSelector(state=> state.posts.user_posts.find(p=>p.id===post_id))
    
    return(
  
            <div className='comment_btn'  >
                <i className='bx bx-comment ' ></i>
            </div>
            

        
    )
}
export {LikeBtn,CommentBtn}