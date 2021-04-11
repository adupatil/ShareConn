import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost,addUserPost } from '../../features/posts/postSlice';
import axios from 'axios';



function AddPost() {
    const userDetails=useSelector(state=>state.user.userDetails)
    const postStyle=useSelector(state=>state.posts.addPost)
    const subconns_following=useSelector(state=>state.user.subconns_following)
    const dispatch=useDispatch()
    // states
    const [followingSubconnDets,setfds]=useState([<option defaultChecked >Category</option>,<option value='user'>Self</option>])
    const [post_title,setpost_title]=useState('')
    const [post_type,setpost_type]=useState('')
    const [category,setcategory]=useState('')
    const [post_text,setpost_text]=useState('')

    
    useEffect(()=>{
        subconns_following.forEach(subconn=>{
            console.log('subcponnnnn')
            axios.get('api/subconns/'+subconn+'/')
            .then(res=>{
                console.log(res.data)
                setfds(prev=>[...prev,<option value={res.data.id}>{res.data.subconn_name}</option>])
               
            })
           
        })

    },[postStyle])
       
        

        
    
    
    const submitForm=(e)=>{
        e.preventDefault()
       

        let obj=new FormData()
        
      
        obj.append('post_text',post_text)
        obj.append('post_title',post_title)
        obj.append('post_type',post_type)
        obj.append('category',category)
        obj.append('user_id',userDetails.id)
        console.log(obj)
        dispatch(addUserPost(obj))
        setpost_text('')
        setpost_title('')
        setpost_type('')
        hide()
        
        


    }
    
    const hide=()=>{
        dispatch(addNewPost('none'))
    }
    return (
        <div className="addPostFormContainer" style={{display:postStyle}}>
            
            <form className='addPostForm' encType="multipart/form-data" onSubmit={submitForm} method="POST">
            <div style={{display:'flex',alignItems:'center'}}>
           
                <img style={{height:'3.5rem'}} src={`${process.env.PUBLIC_URL}`+`/assets/img/add_post_gree.svg`}></img><h3 style={{color:'darkslategrey'}}>Add Post</h3>
            </div>
                <div className='close' onClick={hide}><i className='bx bx-x-circle' ></i></div>
               
                <input type="text" placeholder='Post title' value={post_title} onChange={(e)=>setpost_title(e.target.value)}></input>
                <div style={{display:'flex',alignItems:'center',marginTop:'1rem',width:'100%'}}>
                    <select onChange={(e)=>{console.log(e.target.value);setcategory(e.target.value)}}>
                        {followingSubconnDets}
                    </select>
                    
                    <label> 
                    <i className='bx bx-image-add' style={{fontSize:'24px',marginLeft:'1rem'}}></i>
                        <input type="file" onChange={(e)=>setpost_type(e.target.files[0])}></input>
                    </label>
                    
                </div>
                
                
                <input type="text" placeholder='Text'  value={post_text} onChange={(e)=>setpost_text(e.target.value)}></input>
                
                <input type="submit"  placeholder="Login"></input>
            </form>
            
        </div>
    )
}

export default AddPost
