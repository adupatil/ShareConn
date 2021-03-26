import React from 'react';
import '../../assets/css/Post.css'
import Post from './Post'

function PostList({postList,uid,userDetails}){
    
    
    const posts=postList.map((post,i)=>(<Post postDetail={post} key={"post_"+i} userDetails={userDetails}></Post>))

    
    
    return(
        
            <div className='posts'>
                <ul className="post__list">
                   {posts}
                </ul>
            </div>
            
       
    )

}
export default PostList