// import Avatar
import React, { useState } from 'react';
import EngagementBar from '../Bars/EngagementBar'
import UserAvatar from '../User/UserAvatar'
import {engagementContext} from '../Context'
// props=post details
function Post({postDetail}){
    
    const [likes,setLikes]=useState(postDetail.num_likes)
    const [comments,setComments]=useState(postDetail.num_comments)

    const post_area=()=>{
        let postType=postDetail.post_type;
        if(postType){
            return(<img src={postDetail.postType}></img>)
        }
    }
    return(
        <div className='post'>
            <UserAvatar username="sakshikale14">
                <div className="postDate">{postDetail.date_created.slice(0,10)}</div>
              
            </UserAvatar>
            <div className='post_container'>
                <div className="post_area_container">
                    {/* <p className="post_title">{postDetail.post_title}</p> */}
                    <div className="post_text">{postDetail.post_text}</div>
                    <div className="post_area">
                      {post_area()}  
                    </div>
                    
                </div>
                <engagementContext.Provider value={{likes:[likes,setLikes],comments:[comments,setComments]}}>
                    <EngagementBar ></EngagementBar>
                </engagementContext.Provider>
                

            </div>
            
        </div>
        
    )
}
export default Post;