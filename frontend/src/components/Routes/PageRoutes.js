import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../Pages/Home'
import Notifications from '../Pages/Notification'
import Profile from '../Pages/Profile'
import Settings from '../Pages/Settings'



const PageRoutes=()=>(
    <Switch>
        
        <Route exact path='/notifications' component={Notifications}></Route>
        <Route exact path='/u/:userName/profile' render={(props) => <Profile option="user"></Profile>}></Route>
        <Route exact path='/s/:subconnName/profile' render={(props) => <Profile option="subconn"></Profile>}></Route>
        <Route exact path='/settings' component={Settings}></Route>
        <Route exact path='/' component={Home}></Route>
        
    </Switch>
)
export default PageRoutes;


