import React, { useEffect, useState } from 'react';
import PostList from '../Posts/PostList';
import {useParams} from 'react-router';
import { useSelector,useDispatch} from 'react-redux';
import {fetchUser,fetchUserProfile,fetchUsersFollowing} from '../../features/user/userSlice';
import {fetchUserPosts} from '../../features/posts/postSlice'

import axios from 'axios'


// import useFetch from '../Hooks/useFetch';
function UserProfile(props){
   const loggedInuser=useSelector(state=>state.user);
   const usersPosts=useSelector(state=>state.posts.user_posts)
   
   const uid=useParams().id
  
  console.log(uid)
  console.log(loggedInuser.userDetails.id)
    const [user,setUser]=useState(null)
    const [posts,setPosts]=useState(null)
    useEffect(()=>{
        if(loggedInuser.userDetails.id==uid){
            console.log('treu')
            setUser(loggedInuser)
            setPosts(usersPosts)
           
        }else{
           console.log('ffalse')
            let obj={}
            let users_posts=[]
            axios.get(`http://127.0.0.1:8000/api/users/${uid}/`)
            .then(user=>{
               obj.userDetails=user.data
               axios.get('http://127.0.0.1:8000/api/users_profile/')
                    .then(userProfiles=>{
                    
                        userProfiles.data.forEach(profile=>{
                            if(profile.user==uid){
                            
                                obj.userProfile=profile
                            }
                        })
                        setUser(obj)
                    })
            })
               
            

            

            axios.get(`http://127.0.0.1:8000/api/posts/`)
            .then(posts=>{
                posts.data.forEach(post=>{
                    if(post.user_id==uid){
                        users_posts.push(post)
                    }
                })
                setPosts(users_posts)
                
            
            })
           
    
        }
       

    },[uid])
    console.log('%%%%%')
    console.log(user)
    console.log(posts)
   if(user!==null){
        return(
            <div>
                <div className='pictures'>
                    <div className="coverPicContainer">
                        <div className="coverPic">
                            <img ></img>
                        </div>
                    </div>
                    <div className="profilePicContainer">
                        <div className="profilePic"></div>
                    </div>
                </div>
                <div className="userDetails">
                    <div className="userCredentials">
                        <div id="userName">{user.userDetails.username}</div>
                      
                        <div className="userEngagement">
                            <div id="userFollowers"><span className="followerCount">{user.userProfile.num_followers}</span> Followers</div>
                            <div id="userFollowing"><span className="followingCount">{user.userProfile.num_following}</span> Following</div>
                        </div>
                    </div>
                    {loggedInuser==uid && <div className='editProfileBtn'><i className='bx bx-edit-alt'></i>Edit Profile</div>}
                </div>
                {posts && <div className="userPostContainer">
                    <PostList postList={posts} uid={uid} userDetails={user.userDetails}></PostList>
                </div>}
    
            </div>
            
        )
    }
    else{
        return(<div>Loading</div>)
    }
    
}

export default UserProfile;