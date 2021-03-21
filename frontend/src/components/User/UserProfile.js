import React, { useEffect, useState } from 'react';
import PostList from '../Posts/PostList';
import {useParams} from 'react-router';

import {connect} from 'react-redux';
import {fetchUser,fetchUserPost,fetchUserFollow} from '../../actions/userActions'
// import useFetch from '../Hooks/useFetch';
function UserProfile(props){
   const uid=useParams().id
   useEffect(()=>{
        props.fetchUser(uid)
       props.fetchUserPost(uid)
       props.fetchUserFollow(uid)
        
    },[])
   
   if(props.userDetails!==null){
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
                        <div id="userName">{props.userDetails.username}</div>
                      
                        <div className="userEngagement">
                            <div id="userFollowers"><span className="followerCount">{props.userFollow.follower}</span> Followers</div>
                            <div id="userFollowing"><span className="followingCount">{props.userFollow.followee}</span> Following</div>
                        </div>
                    </div>
                </div>
                {props.userPosts && <div className="userPostContainer">
                    <PostList postList={props.userPosts} uid={uid} userDetails={props.userDetails}></PostList>
                </div>}
    
            </div>
            
        )
    }else{
        return(<div>Nodata</div>)
    }
    
}
const mapStateToProps=state=>({
    userDetails:state.user.userDetails,
    userPosts:state.user.userPosts,
    userFollow:state.user.userFollow

})
export default connect(mapStateToProps,{fetchUser,fetchUserPost,fetchUserFollow})(UserProfile)