import React, { useState } from 'react';
// css
import '../../assets/css/Bars.css';
import '../../assets/css/Page.css'
// components
import {NavBar,SideBar} from '../Bars/Bars';

import PostList from '../Posts/PostList';


function Home(props) {
    // const [userDetail,setUserDetail]=useState({})
    const userPosts=[{
        "id": 1,
        "post_title": "Test",
        "num_likes": 2,
        "num_comments": 2,
        "date_created": "2021-02-28T17:28:20.878348Z",
        "post_type": "http://127.0.0.1:8000/media/posts/F(user.username)/dogs_1280p_0_f6NtrjR.jpg",
        "post_text": "this is my doggo",
        "category": "Dogs",
        "user_id": 1
    }]
    
    return(
        <div className="listContainerScroll">
            <PostList postList={userPosts} uid='1'></PostList>
        </div>
        
                
           
                

        
    )
    
}
export default Home;