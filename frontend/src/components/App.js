import React from 'react';
// css
import '../assets/css/Bars.css';
import '../assets/css/Page.css'
// components
import {NavBar,SideBar} from './Bars/Bars';
import Home from './Pages/Home'
import PageRoutes from './Routes/PageRoutes'

// redux
import {Provider} from 'react-redux';
import store from '../store'

function App(props) {
    // const [userDetail,setUserDetail]=useState({})
    return(
    <Provider store={store}>
       
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
        
  

    </Provider>
    )
    
}
export default App;