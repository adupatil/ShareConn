import React from 'react';
// css
import '../assets/css/Bars.css';
import '../assets/css/Page.css'
// components
import {NavBar,SideBar} from './Bars/Bars';
import Home from './Pages/Home'
import PageRoutes from './Routes/PageRoutes'




function App(props) {
    // const [userDetail,setUserDetail]=useState({})
    
    
    return(
        <div className='page'>
            <NavBar username="sakshikale14"></NavBar>
            <div className="main_area">
                <SideBar activePage='home'></SideBar>
                {/* page */}
                <div className='listContainer'>
                <PageRoutes></PageRoutes>
                </div>
               
                
            </div>
                
            
        </div>
        
    )
    
}
export default App;