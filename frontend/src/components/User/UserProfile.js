import React, { useEffect, useState } from 'react';
import PostList from '../Posts/PostList';
import {useParams} from 'react-router';
import axios from 'axios';
// import useFetch from '../Hooks/useFetch';
function UserProfile(props){
    const [data,setData]=useState(null)
    // const [isPending,setisPending]=useState(true)
    // const [error,setError]=useState(null)
    // const {data,isPending,error}=useFetch('http://127.0.0.1:8000/api/posts/');
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/posts')
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])
   console.log(data)
   
    const {userName}=useParams()
    if(data!==null){
        return(
            <div>
                <div className='pictures'>
                    <div className="coverPicContainer">
                        <div className="coverPic"></div>
                    </div>
                    <div className="profilePicContainer">
                        <div className="profilePic"></div>
                    </div>
                </div>
                <div className="userDetails">
                    <div className="userCredentials">
                        <div id="userName">{userName}</div>
                        <div id="userBio">abscd</div>
                        <div className="userEngagement">
                            <div id="userFollowers"><span className="followerCount">10</span> Followers</div>
                            <div id="userFollowing"><span className="followingCount">10</span> Following</div>
                        </div>
                    </div>
                </div>
                <div className="userPostContainer">
                    <PostList></PostList>
                </div>
    
            </div>
            
        )
    }else{
        return(<div>Nodata</div>)
    }
    
}
export default UserProfile