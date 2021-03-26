// import Avatar
import React from 'react';
import EngagementBar from '../Bars/EngagementBar'
import UserAvatar from '../User/UserAvatar'

// props=post details
function Post({postDetail,userDetails}){
  
  
  
    const post_area=()=>{
        let postType=postDetail.post_type;
        if(postType){
            return(<img src={postDetail.postType}></img>)
        }
    }
    return(
        <div className='post'>
            <UserAvatar username={userDetails.username}>
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
               
                    <EngagementBar  postDetail={postDetail}  ></EngagementBar>
                
                

            </div>
            
        </div>
        
    )
}
export default Post;