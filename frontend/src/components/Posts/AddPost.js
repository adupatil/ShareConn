import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from '../../features/posts/postSlice';

function AddPost() {
    const userDetails=useSelector(state=>state.user.userDetails)
    const postStyle=useSelector(state=>state.posts.addPost)
    const submitForm=(e)=>{
        e.preventDefault();

    }
    const dispatch=useDispatch()
    const hide=()=>{
        dispatch(addNewPost('none'))
    }
    return (
        <div className="addPostFormContainer" style={{display:postStyle}}>
            <form className='addPostForm'>
                <div className='close' onClick={hide}><i className='bx bx-x-circle' ></i></div>
                <div>Post As: {userDetails.username}</div>
                <input type="text" placeholder='Post title'></input>
                <input type="text" placeholder='post type'></input>
                <input type="submit" onClick={submitForm}></input>
            </form>
            
        </div>
    )
}

export default AddPost
