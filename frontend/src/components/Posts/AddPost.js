import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost,addUserPost } from '../../features/posts/postSlice';
import axios from 'axios';

function AddPost() {
    const userDetails=useSelector(state=>state.user.userDetails)
    const postStyle=useSelector(state=>state.posts.addPost)
    const dispatch=useDispatch()
    // states
    const [post_title,setpost_title]=useState('')
    const [post_type,setpost_type]=useState('')
    const [cateogary,setcateogary]=useState('')
    const [post_text,setpost_text]=useState('')
    
    const submitForm=(e)=>{
        e.preventDefault();
        let obj={
            post_text:post_text,
            post_title:post_title,
            post_type:post_type,
            cateogary:cateogary,
            user_id:userDetails.id
        }
        console.log(obj)
        dispatch(addUserPost(obj))
        


    }
    
    const hide=()=>{
        dispatch(addNewPost('none'))
    }
    return (
        <div className="addPostFormContainer" style={{display:postStyle}}>
            <form className='addPostForm'>
                <div className='close' onClick={hide}><i className='bx bx-x-circle' ></i></div>
                <div>Post As: {userDetails.username}</div>
                <input type="text" placeholder='Post title' onChange={(e)=>setpost_title(e.target.value)}></input>
                <input type="file" placeholder='Post type' onChange={(e)=>setpost_type(e.target.value)}></input>
                <input type="text" placeholder='Cateogary' onChange={(e)=>setcateogary(e.target.value)}></input>
                <input type="text" placeholder='Text' onChange={(e)=>setpost_text(e.target.value)}></input>
                
                <input type="submit" onClick={submitForm}></input>
            </form>
            
        </div>
    )
}

export default AddPost
