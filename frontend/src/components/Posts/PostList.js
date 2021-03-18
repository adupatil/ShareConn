import React from 'react';
import '../../assets/css/Post.css'
import Post from './Post'

function PostList(props){
    const count={
        'likes':20,
        'comments':25
    }
    return(
        
            <div className='posts'>
                <ul className="post__list">
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </ul>
            </div>
            
       
    )

}
export default PostList