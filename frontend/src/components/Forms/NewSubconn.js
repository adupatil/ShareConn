import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_subconn, toggleSubconnForm } from '../../features/user/userSlice';

function NewSubconn() {
    const style=useSelector(state=>state.user.subconnForm);
    const loggedInUser=useSelector(state=>state.user.userDetails.id)
    const dispatch=useDispatch()
    // states
    const [sname,setsname]=useState('');
    const [profile,setprofile]=useState(undefined);
    const [cover,setcover]=useState(undefined);

    const handleSubmit=(e)=>{
        e.preventDefault();
        let data={}
        if(sname===''){
            alert('blank')
        }else{

            data['subconn_name']=sname;
            data['subconn_admin']=loggedInUser;
            if(profile){
                data['profile_pic']=profile
            }
            if(cover){
                data['cover_pic']=cover
            }

        }
        axios.post('api/subconns/',data)
        .then(res=>{
            console.log(res.data)
            dispatch(add_subconn(res.data))
        })
        

        


    }
    const closeSubconnForm=()=>{
        dispatch(toggleSubconnForm('none'))
        setsname('')
        setprofile(undefined)
        setcover(undefined)
    }
    return (
        <div className="addPostFormContainer" style={{display:style}} >
            
            <form className='editProfileForm loginForm' encType="multipart/form-data" onSubmit={(e)=>handleSubmit(e)}  method="POST">
                <div style={{display:'flex',alignItems:'center'}}>
            
                    <img style={{height:'3.5rem'}} src={`${process.env.PUBLIC_URL}`+`/assets/img/edit.svg`}></img><h3 style={{color:'var(--inverseModeColor)'}}>Edit Profile</h3>
                </div>
                <div className='close' onClick={closeSubconnForm}><i className='bx bx-x-circle' ></i></div>

                <div style={{display:'flex',width:'100%',marginTop:'1rem'}}>
                    <div className='inputWrapper'>
                        <input type='text' value={sname} onChange={(e)=>setsname(e.target.value)}></input>
                        <label>SubConn Name</label>
                        
                        
                    </div>
                    <div>
                        <input type='file' ></input>
                        <input type='file'></input>
                    </div>
                    
               
                

                </div>
                
            
                
                
                
                
                
                <input type="submit"  placeholder="Login"></input>
            </form>
            
        </div>
    )
}

export default NewSubconn
