import React, { useEffect, useState } from 'react';
import PostList from '../Posts/PostList';
import {useParams} from 'react-router';
import { useSelector,useDispatch} from 'react-redux'
import {selectUser} from '../../features/user/userSlice'
import axios from 'axios'


// import useFetch from '../Hooks/useFetch';
function UserProfile(props){
   const loggedInuser='1';
   const uid=useParams().id
   
  
   const userDetails=useSelector(selectUser)
   const userPosts=useSelector(state=>state.posts.user_posts)
    const userProfile=useSelector((state)=>{
        console.log(state.user.userDetails.id)
    
        if(state.user.userDetails.id==uid){
            console.log('equal')
            console.log(state.user.userProfile)
            return state.user.userProfile
        }
        else{
            return null;
        }
        })
    if(userProfile===null && uid!==loggedInuser){
        axios.get('http://127.0.0.1:8000/api/users_profile/')
        .then(userProfiles=>{
          
            userProfiles.data.forEach(profile=>{
                if(profile.user==uid){
                  
                    const userProfile=profile
                }
            })
        })
    }
    console.log(userProfile)
   
  


   
   
   
   
   if(userProfile!==null){
        return(
            <div>
                <div className='pictures'>
                    <div className="coverPicContainer">
                        <div className="coverPic">
                            <img src={userProfile.cover_pic}></img>
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
                            <div id="userFollowers"><span className="followerCount">{userProfile.num_followers}</span> Followers</div>
                            <div id="userFollowing"><span className="followingCount">{userProfile.num_following}</span> Following</div>
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