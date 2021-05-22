import React,{useState} from 'react'
import { useLocation, useParams } from 'react-router';
import Post from '../Posts/Post';
import CommentList from './CommentList';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

function FullPost(props) {
    const pid=useParams().id
    const loggedInuser=useSelector(state=>state.user.userProfile)
  
    const {postDetail,postType}=useLocation()
    const [editForm,showEditPost]=useState(false)
    const dispatch = useDispatch()


    const editPost=()=>{
        if(postType==='user'){
            let data={
    
            }
            axios.put('api/posts/'+postDetail.id+'/',data)
            .then(res=>{
                console.log(res.data)
                if(loggedInuser.id===postDetail.user_id){
                   
                }else{
                   
                }
            })
        }else{
            let data={
    
            }
           axios.put('api/subconns_posts/'+postDetail.id+'/',data)
           .then(res=>{
               
                 
               
           })
        }
    }
    
  
        return (
            <div className='listContainerScroll'>
               
                <Post postDetail={postDetail} postType={postType}></Post>
                <CommentList postType={postType} postID={pid} post={postDetail}></CommentList>
            </div>
        )

    
    
}

export default FullPost
