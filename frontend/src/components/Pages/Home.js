import React, { useEffect } from 'react';
// css
import '../../assets/css/Bars.css';
import '../../assets/css/Page.css'
// components
import PostList from '../Posts/PostList';
//router
import {useParams} from 'react-router'
// redux
import {useDispatch,useSelector} from 'react-redux';
// slices




function Home(props) {
    const dispatch = useDispatch();
    const userDetails=useSelector(state=>state.user.userDetails)
    const uid=useParams().id
    const posts=useSelector(state=>state.posts)
    const Allposts=posts.user_posts.concat(posts.followed_posts)
    
    // sort users post and posts of subconn they follow acc to date and time.
    
    
    return(
        <div className="listContainerScroll">
            <PostList postList={Allposts} uid={uid} userDetails={userDetails}></PostList>
        </div>
        
        
                
           
                

        
    )
    
}


export default Home