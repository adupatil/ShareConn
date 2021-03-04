import React, { Component } from 'react';
// css
import '../../assets/css/Bars.css';
import '../../assets/css/Page.css'
// components
import {NavBar,SideBar} from '../Bars/Bars';

import PostList from '../Posts/PostList';


class Home extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className='page'>
                <NavBar username="sakshikale14"></NavBar>
                <div className="main_area">
                <SideBar activePage='home'></SideBar>
                <PostList></PostList>

                </div>
                

            </div>
        )
    }
}
export default Home;