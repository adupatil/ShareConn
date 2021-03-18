import React from 'react';
import PostList from '../Posts/PostList';
import {useParams} from 'react-router';
function UserProfile(props){
    const {userName}=useParams()
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
}
export default UserProfile