import React, { useEffect, useState } from 'react';
import PostList from '../Posts/PostList';
import {useParams} from 'react-router';
import axios from 'axios';
// import useFetch from '../Hooks/useFetch';
function UserProfile(props){
   const uid=useParams().id
   console.log(uid)
    const [userDetails,setUserDetail]=useState(null)
    const [userPosts,setuserPosts]=useState(null)
    
    useEffect(()=>{
        
        axios.get(`http://127.0.0.1:8000/api/users/${uid}/`)
        .then(res1=>{
            console.log(res1.data)
            setUserDetail(res1.data)
        })
        .catch(function(err){
            if(err.response){
                console.log('response err fromdetails')
            }if(err.request){
                console.log('req rr fd')
                console.log(err)
            }
        })
        axios.get(`http://127.0.0.1:8000/api/posts/`)
        .then(res=>{
            
            setuserPosts(res.data)
        })
        .catch(function(err){
            if(err.response){
                console.log('response err')
            }if(err.request){
                console.log('req rr')
                console.log(err)
            }
        })
    },[])
   
   
   
   
    
    if(userDetails!==null){
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
                        <div id="userName">{userDetails.username}</div>
                      
                        <div className="userEngagement">
                            <div id="userFollowers"><span className="followerCount">10</span> Followers</div>
                            <div id="userFollowing"><span className="followingCount">10</span> Following</div>
                        </div>
                    </div>
                </div>
                {userPosts && <div className="userPostContainer">
                    <PostList postList={userPosts} uid={uid}></PostList>
                </div>}
    
            </div>
            
        )
    }else{
        return(<div>Nodata</div>)
    }
    
}
export default UserProfile