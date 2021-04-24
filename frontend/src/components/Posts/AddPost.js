import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost,addUserPost,addSubconnPost} from '../../features/posts/postSlice';
import axios from 'axios';



function AddPost() {
    const userDetails=useSelector(state=>state.user.userDetails)
    const postStyle=useSelector(state=>state.posts.addPost)
    const subconns_following=useSelector(state=>state.user.subconns_following)
    const dispatch=useDispatch()
    // states
    const [followingSubconnDets,setfds]=useState([<option defaultChecked >Post under</option>,<option value='user'>Self</option>])
    const [source,setsource]=useState(undefined)
    const [post_title,setpost_title]=useState('')
    const [post_type,setpost_type]=useState('')
    const [category,setcategory]=useState('')
   

    
    useEffect(()=>{
        subconns_following.forEach(subconn=>{
           
            axios.get('api/subconns/'+subconn+'/')
            .then(res=>{
                console.log(res.data)
                setfds(prev=>[...prev,<option value={res.data.id}>{res.data.subconn_name}</option>])
               
            })
           
        })

    },[subconns_following])
       
        

        
    
    
    const submitForm=(e)=>{
        e.preventDefault()
       

        let obj=new FormData()
        
      
       
        obj.append('post_title',post_title)
        obj.append('category',category)
       
        if(post_type!==''){
            obj.append('post_type',post_type)
        }
      
       
        console.log(obj)
        if(source==='user'){
            obj.append('user_id',userDetails.id)
            dispatch(addUserPost(obj))
        }else{
            obj.append('user',userDetails.id)
            obj.append('subconn',source)
            dispatch(addSubconnPost(obj))
        }
        
        
        setpost_title('')
        setpost_type('')
        setfds([<option defaultChecked >Category</option>,<option value='user'>Self</option>])
        hide()
        
        


    }
    
    const hide=()=>{
        dispatch(addNewPost('none'))
    }
    return (
        <div className="addPostFormContainer" style={{display:postStyle}}>
            
            <form className='addPostForm' encType="multipart/form-data" onSubmit={submitForm} method="POST">
                <div style={{display:'flex',alignItems:'center'}}>
            
                    <img style={{height:'3.5rem'}} src={`${process.env.PUBLIC_URL}`+`/assets/img/add_post_gree.svg`}></img><h3 style={{color:'var(--inverseModeColor)'}}>Add Post</h3>
                </div>
                <div className='close' onClick={hide}><i className='bx bx-x-circle' ></i></div>

                <select onChange={(e)=>setsource(e.target.value)}>
                    {followingSubconnDets}
                </select>
                <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
                    

                    <input type="text" placeholder='Category' value={category} onChange={(e)=>setcategory(e.target.value)}></input>
                    

                </div>
                
                <div style={{display:'flex',alignItems:'center',marginTop:'1rem',width:'100%'}}>
                  <div style={{width:'88%',marginRight:'1rem'}}>
                  <input type="text" style={{marginTop:'0px'}}  placeholder='Post Text' value={post_title} onChange={(e)=>setpost_title(e.target.value)}></input>

                  </div>
                  
                    <label style={{display:'flex',alignItems:'center'}} > 
                    <i className='bx bx-image-add' style={{fontSize:'24px',marginLeft:'1rem'}}></i>
                        <input type="file" onChange={(e)=>setpost_type(e.target.files[0])}></input>
                    </label>
                    
                </div>
                
                
                
                
                <input type="submit"  placeholder="Login"></input>
            </form>
            
        </div>
    )
}

export default AddPost
