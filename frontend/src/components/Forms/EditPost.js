import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_to_editPost, toggle_edit_post } from '../../features/user/userSlice'

function EditPost() {
    const style=useSelector(state=>state.user.editPostForm.style)
    const user=useSelector(state=>state.user.userProfile.id)
    const post=useSelector(state=>state.user.editPostForm.post)
    // states
    
    const [post_title,setpostTile]=useState(post.post_title)
    const [category,setCategory]=useState(post.category)

    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
       
        let data={
            post_title:post_title,
            user_id:user,
            category:category
        }
        
        axios.put('api/posts/'+post.id+'/',data)
        .then(res=>{
            alert('Post edited')
            dispatch(set_to_editPost({}))
            dispatch(toggle_edit_post('none'))
        })
    }
    const closeEditForm=(e)=>{
        dispatch(toggle_edit_post('none'))
        dispatch(set_to_editPost({}))
    }


    return (
        <div className="addPostFormContainer" style={{display:style}} >
            
        <form className='editProfileForm ' encType="multipart/form-data" onSubmit={(e)=>handleSubmit(e)}  method="POST">
            
            <div style={{display:'flex',alignItems:'center'}}>
        
                <img style={{height:'3.5rem'}} src={`${process.env.PUBLIC_URL}`+`/assets/img/edit.svg`}></img><h3 style={{color:'var(--inverseModeColor)'}}>Edit Profile</h3>
            </div>
            <div className='close' onClick={closeEditForm}><i className='bx bx-x-circle' ></i></div>
            <div>
                Post ID: {post.id}
            </div>
            <div style={{display:'flex',width:'100%',marginTop:'1rem'}}>
                <div className='inputWrapper'>
                    <input type='text' value={post_title} onChange={(e)=>setpostTile(e.target.value)}></input>
                    <label>Post Title</label>
                </div>
                <div className='inputWrapper'>
                <input type='text' value={category} onChange={(e)=>setCategory(e.target.value)}></input>
                    <label>Post Category</label>
                </div>
           
            

            </div>
            
        
            
            
            
            
            
            <input type="submit"  placeholder="Login"></input>
        </form>
        
    </div>
    )
}

export default EditPost
