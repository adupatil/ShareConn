import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SubConnAvatar from '../SubConn/SubConnAvatar'
import {toggleSubconnForm} from '../../features/user/userSlice'



function SearchBar() {
    const [search,setsearch]=useState(undefined)
    const options=useSelector(state=>state.user.subconns_admined);
    const randomUsers=useSelector(state=>state.user.randomUsers)
    const dispatch=useDispatch()


    const showSubconnForm=()=>{
        dispatch(toggleSubconnForm('flex'))
    }
    
    const randomUsersList=randomUsers.map((user,i)=>(<div key={`randomUser_${i}`}>{user.first_name}{user.last_name} <span style={{color:'lightgray',fontSize:'small'}}>@{user.username}</span></div>))
    
    
   
    return (
        <div className='rightSideBar'>
            <div className="searchBarContainer">
            
                <input type='text' placeholder="Search" className="searchBar" onChange={(e)=>setsearch(e.target.value)}></input>
                <div className="randomUser">
                    {randomUsersList}
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
