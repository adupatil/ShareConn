import React from 'react';
import '../../assets/css/Post.css'
import Post from './Post'

function PostList({postList,uid}){
    console.log('uid='+uid)
    const posts=postList.map((post,i)=>{
        console.log(post)
    if(post.user_id==uid){
        return(<Post postDetail={post} key={i}></Post>)
    }
})
    
    
    return(
        
            <div className='posts'>
                <ul className="post__list">
                   {posts}
                </ul>
            </div>
            
       
    )

}
export default PostList