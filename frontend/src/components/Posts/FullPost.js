import React from 'react'
import { useLocation, useParams } from 'react-router';
import Post from '../Posts/Post';
import CommentList from './CommentList';

function FullPost(props) {
    const pid=useParams().id
    const l=useLocation()
    const {postDetail,postType}=useLocation()
    
  
        return (
            <div className='listContainerScroll'>
               
                <Post postDetail={postDetail} postType={postType}></Post>
                <CommentList postType={postType} postID={pid}></CommentList>
            </div>
        )

    
    
}

export default FullPost
