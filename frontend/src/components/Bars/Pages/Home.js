import React, { Component } from 'react';
import '../../../assets/css/Bars.css';
import '../Bars/NavBar.js'
import NavBar from '../Bars/NavBar.js';
import PostList from '../Posts/PostList.js'
import SideBar from '../Bars/SideBar.js';
import '../../../assets/css/Page.css'

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='page'>
                <NavBar username="sakshikale14"></NavBar>
                <div className="main_area">
                <SideBar></SideBar>
                <PostList></PostList>

                </div>
                

            </div>
        )
    }
}
export default Home;