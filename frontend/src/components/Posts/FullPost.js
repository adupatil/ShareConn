import React from 'react'
import { useLocation, useParams } from 'react-router';
import Post from '../Posts/Post';
import CommentList from './CommentList';

function FullPost(props) {
    const pid=useParams().id
    const l=useLocation()
    const {postDetail,postType}=useLocation()
    console.log('------')
    console.log(l)
    if(props.option==='user'){
        return (
            <div className='listContainerScroll'>
               
                <Post postDetail={postDetail} postType={postType}></Post>
                <CommentList></CommentList>
            </div>
        )

    }else if(props.option==='subconn'){
        return (
            <div>
                Full post {pid} {props.option}
            </div>
        )
    }
    
}

export default FullPost
