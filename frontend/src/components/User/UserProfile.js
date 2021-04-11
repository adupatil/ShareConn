import React, { Fragment, useEffect, useState } from 'react';
import PostList from '../Posts/PostList';
import {useParams} from 'react-router';
import { useSelector,useDispatch} from 'react-redux';
import {incrementUserFollowing,decrementUserFollowing} from '../../features/user/userSlice'
import axios from 'axios'
import { NavLink } from 'react-router-dom';



function UserProfile(props){
    const loggedInuser=useSelector(state=>state.user);
    const usersPosts=useSelector(state=>state.posts.user_posts)
    const uid=useParams().id
// states
    const [user,setUser]=useState(null)
    const [posts,setPosts]=useState(null)
    const dispatch=useDispatch()
    const handleFollow=()=>{
      
        dispatch(incrementUserFollowing(uid))
    }
    const handleUnfollow=()=>{
        dispatch(decrementUserFollowing(uid))
    }
    const getFollowStatus=()=>{
        if(loggedInuser.userDetails.id===parseInt(uid)){
            return(<div className='editProfileBtn'><i className='bx bx-edit-alt'></i>Edit Profile</div>)
        }else{
            if(loggedInuser.users_followed.includes(parseInt(uid))){
                return(<div className='followingBtn' onClick={handleUnfollow}>Following</div>)
            }
            else{
                return(<div className='followBtn' onClick={handleFollow}>Follow</div>)
            }
        }
        
    }
   
    
    
    useEffect(()=>{
       console.log('logged in user(profile_='+loggedInuser.userAuthDetails.pk)
        if(loggedInuser.userAuthDetails.pk==uid){
            setUser(loggedInuser)
            setPosts(usersPosts)
           
        }else if(loggedInuser.userAuthDetails.pk!==uid ){
          
            let obj={}
            let users_posts=[]
            
            axios.get(`api/users/${uid}/`)
                .then(user=>{
                    console.log('fetched user not logged')
                obj.userDetails=user.data
                axios.get('http://127.0.0.1:8000/api/users_profile/')
               
                        .then(userProfiles=>{
                            console.log('123456789')
                            console.log(userProfiles)
                            userProfiles.data.forEach(profile=>{
                                if(profile.user.id==uid){
                                console.log(profile)
                                    obj.userProfile=profile
                                }
                            })
                            console.log('obj=')
                            console.log(obj)
                            setUser(obj)
                            
                            


                        })
                })
                .catch(err=>console.log('err='+err))

                axios.get(`api/posts/`)
                                .then(posts=>{
                                   
                                    posts.data.forEach(post=>{
                                        if(post.user_id==uid){
                                            users_posts.push(post)
                                        }
                                    })
                                    setPosts(users_posts)
                                })
               
            

            

            
           
    
        }
       

    },[uid,usersPosts])
   
   
    
   if(user!==null && posts!==null){
        return(
        <Fragment>
                <div className='pictures'>
                    <div className="coverPicContainer">
                        <div className="coverPic">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/cover_pic.jpg`} className='coverImg'></img>
                        </div>
                    </div>
                    <div className="profilePicContainer">
                        <div className="profilePic">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/bean.jpeg`} className='profileImg'></img>
                        </div>
                    </div>
                </div>
                <div className="userDetails">
                    <div className="userCredentials">
                        <div id="userName">{user.userDetails.username}</div>
                      
                        <div className="userEngagement">
                            <NavLink to={`/u/following/${loggedInuser.userAuthDetails.pk}`}id="userFollowers"><span className="followerCount">{user.userProfile.num_followers}</span> Followers</NavLink>
                            <NavLink to={`/u/following/${loggedInuser.userAuthDetails.pk}`}id="userFollowing"><span className="followingCount">{user.userProfile.num_following}</span> Following</NavLink>
                        </div>
                    </div>
                    {getFollowStatus()}
                </div>
                {posts!==null && <div className="userPostContainer">
                    <PostList postList={posts} uid={uid} userDetails={user.userDetails}></PostList>
                </div>}
    
        </Fragment>
            
        )
    }
    else{
        return(<div>Loading</div>)
    }
    
}

export default UserProfile;