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
    const [category,setcategory]=useState('')
    const [post_text,setpost_text]=useState('')
    
    const submitForm=(e)=>{
        e.preventDefault();
        
        let obj=new FormData()
        obj.append('post_text',post_text)
        obj.append('post_title',post_title)
        obj.append('post_type',post_type)
        obj.append('category',category)
        obj.append('user_id',userDetails.if)
        console.log(obj)
        dispatch(addUserPost(obj))
        


    }
    
    const hide=()=>{
        dispatch(addNewPost('none'))
    }
    return (
        <div className="addPostFormContainer" style={{display:postStyle}}>
            <form className='addPostForm' encType="multipart/form-data" onSubmit={submitForm} method="POST">
                <div className='close' onClick={hide}><i className='bx bx-x-circle' ></i></div>
                <div>Post As: {userDetails.username}</div>
                <input type="text" placeholder='Post title' onChange={(e)=>setpost_title(e.target.value)}></input>
                <input type="file" placeholder='Post type' onChange={(e)=>setpost_type(e.target.files[0])}></input>
                <input type="text" placeholder='Cateogary' onChange={(e)=>setcategory(e.target.value)}></input>
                <input type="text" placeholder='Text' onChange={(e)=>setpost_text(e.target.value)}></input>
                
                <input type="submit"  placeholder="Login"></input>
            </form>
            
        </div>
    )
}

export default AddPost
