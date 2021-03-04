// import Avatar
import React from 'react';
import EngagementBar from '../Bars/EngagementBar'
import UserAvatar from '../User/UserAvatar'
// props=post details
function Post(props){
    const count={
        likes:20,
        comments:20
    }
    return(
        <div className='post'>
            <UserAvatar username="sakshikale14">
                <div>Date</div>
            </UserAvatar>
            <div className='post_container'>
                <div className="post_area_container">
                    <div className="post_area">
                        
                    </div>
                </div>
                <EngagementBar count={count}></EngagementBar>

            </div>
            
        </div>
        
    )
}
export default Post;