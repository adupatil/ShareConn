import React from 'react';
import '../../assets/css/Post.css'
import Post from './Post'

function PostList({postList,uid,userDetails}){
    console.log('uid='+uid)
    
    const posts=postList.map((post,i)=>(<Post postDetail={post} key={"post_"+i} userDetails={userDetails}></Post>))
console.log(posts)
    
    
    return(
        
            <div className='posts'>
                <ul className="post__list">
                   {posts}
                </ul>
            </div>
            
       
    )

}
export default PostList