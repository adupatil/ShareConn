import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_admin_as_follower, add_subconn, increment_subconns_following, toggleSubconnForm } from '../../features/user/userSlice';

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
           
            dispatch(add_subconn(res.data))
            axios.post('api/subconns_follower/',{followee_s:res.data.id,follower_s:res.data.subconn_admin})
            .then(res=>{
                
                dispatch(add_admin_as_follower(res.data.follower_s))
                dispatch(increment_subconns_following(res.data.followee_s))
            })
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
            
            <form className='editProfileForm ' encType="multipart/form-data" onSubmit={(e)=>handleSubmit(e)}  method="POST">
                <div style={{display:'flex',alignItems:'center'}}>
            
                    <img style={{height:'3.5rem'}} src={`${process.env.PUBLIC_URL}`+`/assets/img/edit.svg`}></img><h3 style={{color:'var(--inverseModeColor)'}}>Create new subconn</h3>
                </div>
                <div className='close' onClick={closeSubconnForm}><i className='bx bx-x-circle' ></i></div>

                <div style={{width:'100%',marginTop:'1rem'}}>
                    <div className='inputWrapper'>
                        <input type='text' value={sname} onChange={(e)=>setsname(e.target.value)}></input>
                        <label>SubConn Name</label>
                        
                        
                    </div>
                    <div style={{display:'flex'}}>
                        <label style={{position:'unset'}} className='newSubconnFile'>
                            <div><i class='bx bx-image' ></i>Add profile picture</div>
                            <input type='file' ></input>
                        </label>
                        <label style={{position:'unset',color:'var(--inverseModeColor)'}} className='newSubconnFile'>
                            <div><i class='bx bx-image' ></i>Add cover picture</div>
                            <input type='file' ></input>
                        </label>
                        
                        
                    </div>
                    
               
                

                </div>
                
            
                
                
                
                
                
                <input type="submit"  placeholder="Login"></input>
            </form>
            
        </div>
    )
}

export default NewSubconn
