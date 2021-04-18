import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function EditProfile(props) {
    const user=useSelector(state=>state.user)
    const [fname,setfname]=useState(user.userDetails.first_name)
    const [lname,setlname]=useState(user.userDetails.last_name)
    const [subconnName,setsunconnName]=useState(undefined)
    const style=user.editProfile
    const handleSubmit=()=>{
        if(props.option==='user'){
            let data={
                first_name:fname,
                last_name:lname,
                username:user.userDetails.username,
                
            }
            axios.put('api/users/'+user.userDetails.id+'/',data)
        }
    }

    if(props.option==='user' ){
        return (
            <div className="addPostFormContainer" style={{display:style}} >
            
            <form className='addPostForm' encType="multipart/form-data" onSubmit={handleSubmit}  method="POST">
                <div style={{display:'flex',alignItems:'center'}}>
            
                    <img style={{height:'3.5rem'}} src={`${process.env.PUBLIC_URL}`+`/assets/img/edit.svg`}></img><h3 style={{color:'var(--inverseModeColor)'}}>Edit Profile</h3>
                </div>
                <div className='close' ><i className='bx bx-x-circle' ></i></div>
                <input type='text' value={fname} onChange={(e)=>setfname(e.target.value)}></input>
                <input type='text' value={lname} onChange={(e)=>setlname(e.target.value)}></input>
                
                
                
                
                <input type="submit"  placeholder="Login"></input>
            </form>
            
        </div>
    )
        

    }else if(props.option==='subconnProfile'){
        return(
            <div>
                
            </div>
        )
    }
}

export default EditProfile
