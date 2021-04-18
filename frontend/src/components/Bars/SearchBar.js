import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import SubConnAvatar from '../SubConn/SubConnAvatar'



function SearchBar() {
    const [search,setsearch]=useState(undefined)
    const options=useSelector(state=>state.user.subconns_admined);
    
   
    return (
        <div className='rightSideBar'>
            <div className="searchBarContainer">
            
                <input type='text' placeholder="Search" className="searchBar" onChange={(e)=>setsearch(e.target.value)}></input>
                
            </div>
            <div className='adminedSubconns'>
                <div style={{padding:'1rem',fontWeight:'bolder'}}>Subconns you admin</div>
                <div>
                    
                    {options.map(opt=><SubConnAvatar option='followList' subconnProfile={opt}></SubConnAvatar>)}
                    <div className='createNewSubconn'>
                        <div className='createSubconnbtn '>Create new SubConn</div>
                    </div>
                </div>
           
            </div>

        </div>
        
    )
}

export default SearchBar
