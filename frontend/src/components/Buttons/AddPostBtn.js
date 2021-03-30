import React from 'react';
import { useDispatch } from 'react-redux';
import '../../assets/css/Buttons.css'
import { addNewPost } from '../../features/posts/postSlice';
function AddPostBtn(props){
    const dispatch=useDispatch()
    const showPost=()=>{
        dispatch(addNewPost('flex'))
    }
    return(
        <button  className="newPostBtn orangeBtn" onClick={showPost}>
            <i className='bx bx-plus'></i>Add Post
        </button>
    )
}
export default AddPostBtn;

