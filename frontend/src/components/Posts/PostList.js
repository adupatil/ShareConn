import React from 'react';
import '../../assets/css/Post.css'
import Post from './Post'

function PostList({postList,uid,userDetails}){
    
    console.log(postList)
    const posts=postList.map((post,i)=>(<Post postDetail={post} key={"post_"+i} userDetails={userDetails}></Post>))

    
    
    return(
        
            <div className='posts'>
                <ul className="post__list">
                   {posts.length>0?posts:"No posts :("}
                </ul>
            </div>
            
       
    )

}
export default PostList