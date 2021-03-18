import React, { useState } from 'react';
// css
import '../../assets/css/Bars.css';
import '../../assets/css/Page.css'
// components
import {NavBar,SideBar} from '../Bars/Bars';

import PostList from '../Posts/PostList';


function Home(props) {
    // const [userDetail,setUserDetail]=useState({})
    
    
    return(
        <div className="listContainerScroll">
   <PostList></PostList>
        </div>
        
                
           
                

        
    )
    
}
export default Home;