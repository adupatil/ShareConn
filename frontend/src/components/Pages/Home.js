import React, { useEffect } from 'react';
// css
import '../../assets/css/Bars.css';
import '../../assets/css/Page.css'
// components
import PostList from '../Posts/PostList';
//router
import {useParams} from 'react-router'
// redux
import {connect} from 'react-redux';
import {fetchUser,fetchUserPost} from '../../actions/userActions'

function Home(props) {
    const uid=useParams().id
    useEffect(()=>{
            props.fetchUser(uid)
            props.fetchUserPost(uid)
        },[])
    // sort users post and posts of subconn they follow acc to date and time.
    
    
    return(
        <div className="listContainerScroll">
            <PostList postList={props.userPosts} uid={uid} userDetails={props.userDetails}></PostList>
        </div>
        
                
           
                

        
    )
    
}

const mapStateToProps=state=>({
    userDetails:state.user.userDetails,
    userPosts:state.user.userPosts
   

})
export default connect(mapStateToProps,{fetchUser,fetchUserPost})(Home)