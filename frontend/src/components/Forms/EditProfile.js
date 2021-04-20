import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleEditProfile } from '../../features/user/userSlice'
import '../../assets/css/Auth.css'

function EditProfile(props) {
    const user=useSelector(state=>state.user)
    const [fname,setfname]=useState(user.userDetails.first_name)
    const [lname,setlname]=useState(user.userDetails.last_name)
    const [password,setPassword]=useState('')
    const [subconnName,setsunconnName]=useState(undefined)
    const style=user.editProfile
    const dispatch=useDispatch()
    const handleSubmit=()=>{ 
        if(props.option==='user'){
            let data={
                first_name:fname,
                last_name:lname,
                username:user.userDetails.username,
                password:password
                
            }
            axios.put('api/users/'+user.userDetails.id+'/',data)
        }
    }
    const closeEditForm=()=>{
        dispatch(toggleEditProfile('none'))
    }
    

    if(props.option==='user' ){
        return (
            <div className="addPostFormContainer" style={{display:style}} >
            
            <form className='addPostForm' encType="multipart/form-data" onSubmit={handleSubmit}  method="POST">
                <div style={{display:'flex',alignItems:'center'}}>
            
                    <img style={{height:'3.5rem'}} src={`${process.env.PUBLIC_URL}`+`/assets/img/edit.svg`}></img><h3 style={{color:'var(--inverseModeColor)'}}>Edit Profile</h3>
                </div>
                <div className='close' onClick={closeEditForm}><i className='bx bx-x-circle' ></i></div>

                <div>
                <div className='inputWrapper'>
                    <input type='text' value={fname} onChange={(e)=>setfname(e.target.value)}></input>
                    <label>First Name</label>
                </div>
                <div className='inputWrapper'>
                <input type='text' value={lname} onChange={(e)=>setlname(e.target.value)}></input>
                    <label>Last Name</label>
                </div>
               
                

                </div>
            
                <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                
                
                
                
                <input type="submit"  placeholder="Login"></input>
            </form>
            
        </div>
    )
        

    }else {
        return(
            <div>
                
            </div>
        )
    }
}

export default EditProfile
