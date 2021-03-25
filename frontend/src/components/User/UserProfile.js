import React, { useEffect, useState } from 'react';
import PostList from '../Posts/PostList';
import {useParams} from 'react-router';
import { useSelector,useDispatch} from 'react-redux'
import {selectUser,fetchUser,fetchUserFollow,selectUserFollow,selectUserPosts} from '../../features/user/userSlice'
import {fetchUserPosts} from '../../features/posts/postSlice'


// import useFetch from '../Hooks/useFetch';
function UserProfile(props){
   const uid=useParams().id

   const dispatch=useDispatch()
   const userDetails=useSelector(selectUser)
   const userPosts=useSelector(state=>state.posts.user_posts)
   const userFollow=useSelector(selectUserFollow)
   
   useEffect(()=>{
       dispatch(fetchUser(uid))
       dispatch(fetchUserFollow(uid))
       dispatch(fetchUserPosts(uid))
        
        
    },[])
   
   if(userDetails!==null){
        return(
            <div>
                <div className='pictures'>
                    <div className="coverPicContainer">
                        <div className="coverPic">
                            <img src={`http://localhost:8000/backend/media/cover_pics/dog-puppy-on-garden-royalty-free-image-1586966191_5uWMOng.jpg`}></img>
                        </div>
                    </div>
                    <div className="profilePicContainer">
                        <div className="profilePic"></div>
                    </div>
                </div>
                <div className="userDetails">
                    <div className="userCredentials">
                        <div id="userName">{userDetails.username}</div>
                      
                        <div className="userEngagement">
                            <div id="userFollowers"><span className="followerCount">{userFollow.follower}</span> Followers</div>
                            <div id="userFollowing"><span className="followingCount">{userFollow.followee}</span> Following</div>
                        </div>
                    </div>
                </div>
                {userPosts && <div className="userPostContainer">
                    <PostList postList={userPosts} uid={uid} userDetails={userDetails}></PostList>
                </div>}
    
            </div>
            
        )
    }else{
        return(<div>Nodata</div>)
    }
    
}

export default UserProfile;