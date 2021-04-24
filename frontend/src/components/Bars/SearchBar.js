import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SubConnAvatar from '../SubConn/SubConnAvatar'
import {toggleSubconnForm} from '../../features/user/userSlice'
import axios from 'axios';
import UserAvatar from '../User/UserAvatar';



function SearchBar() {
    const [search,setsearch]=useState(undefined)
    const options=useSelector(state=>state.user.subconns_admined);
    const randomUsers=useSelector(state=>state.user.randomUsers)
    const dispatch=useDispatch()
    // states
    const [rUserProfiles,setrUserProfiles]=useState([])


    const showSubconnForm=()=>{
        dispatch(toggleSubconnForm('flex'))
    }
    useEffect(()=>{
        console.log('in')
        
        randomUsers.forEach(user=>{
            axios.get('api/users_profile/'+user.id+'/')
            .then(res=>{
                setrUserProfiles(prev=>[...prev,res.data])
                
            })
        })
       
    },[randomUsers])
    
    
    
   
    return (
        <div className='rightSideBar'>
            <div className="searchBarContainer">
            
                <input type='text' placeholder="Search" className="searchBar" onChange={(e)=>setsearch(e.target.value)}></input>
                <div className="randomUser" style={{padding:'1rem',paddingTop:'0px'}}>
                    <p>Users you may follow</p>
                    {rUserProfiles.map((user,i)=>(<UserAvatar user={user} withEdit={false}></UserAvatar>))}
                </div>
                
            </div>
            <div className='adminedSubconns'>
                <div style={{padding:'1rem',fontWeight:'bolder'}}>Subconns you admin</div>
                <div>
                    
                    {options.map(opt=><SubConnAvatar option='followList' subconnProfile={opt}></SubConnAvatar>)}
                    <div className='createNewSubconn'>
                        <div className='createSubconnbtn' onClick={showSubconnForm}>Create new SubConn</div>
                    </div>
                </div>
           
            </div>

        </div>
        
    )
}

export default SearchBar
