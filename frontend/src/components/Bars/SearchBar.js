import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SubConnAvatar from '../SubConn/SubConnAvatar'
import {toggleSubconnForm} from '../../features/user/userSlice'
import axios from 'axios';
import UserAvatar from '../User/UserAvatar';



function SearchBar() {
    const [search,setsearch]=useState(undefined)
    
    const randomUsers=useSelector(state=>state.user.randomUsers);
    const randomSubconns=useSelector(state=>state.user.randomSubconns)
    const dispatch=useDispatch()
    // states
    const [rUserProfiles,setrUserProfiles]=useState([])
    const [rSubconnProfiles,setrSubconnProfiles]=useState([])


    
    useEffect(()=>{
        
        setrUserProfiles([])
        console.log(rUserProfiles)
        randomUsers.forEach(user=>{

            axios.get('api/users_profile/'+user.id+'/')
            .then(res=>{
           
                setrUserProfiles(prev=>[...prev,res.data])
                
                
            })
            
        })
       
    },[randomUsers])
    
    useEffect(()=>{
        setrSubconnProfiles([])
        setrSubconnProfiles(randomSubconns)
        
        
       
    },[randomSubconns])
    
    
    
   
    return (
        <div className='rightSideBar'>
            <div className="searchBarContainer">
            
                <input type='text' placeholder="Search" className="searchBar" onChange={(e)=>setsearch(e.target.value)}></input>
                <div className="randomUser" style={{padding:'1rem',paddingTop:'0px'}}>
                    <p>Users you may follow</p>
                    {rUserProfiles.map((user,i)=>(<UserAvatar user={user} withEdit={false}></UserAvatar>))}
                </div>
                <div className="randomUser" style={{padding:'1rem',paddingTop:'0px'}}>
                    <p>Subconns you may follow</p>
                    {rSubconnProfiles.map((s,i)=>(<SubConnAvatar option='followList' withEdit={false} subconnProfile={s}></SubConnAvatar>))}
                </div>
                
            </div>
            

        </div>
        
    )
}

export default SearchBar
