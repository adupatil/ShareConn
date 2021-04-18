import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../Pages/Home'
import Notifications from '../Pages/Notification'
import Profile from '../Pages/Profile'
import Settings from '../Pages/Settings'
import FullPost from '../Posts/FullPost'
import Following from '../FollowList/Following'
import ChangePassword from '../Forms/ChangePassword'



const PageRoutes=()=>(
    <Switch>
        <Route  path='/' exact component={Home}></Route>
        <Route  path='/notifications' exact component={Notifications}></Route>
        <Route  path='/u/profile/:id' exact render={(props) => <Profile option="user"></Profile>}></Route>
        <Route  path='/s/profile/:id' exact render={(props) => <Profile option="subconn"></Profile>}></Route>
        <Route path='/u/posts/:id' exact render={(props) => <FullPost option="user"></FullPost>}></Route>
        <Route path='/s/posts/:id' exact render={(props) => <FullPost option="subconn"></FullPost>}></Route>
        <Route path='/u/following/:id' exact component={Following}></Route>
        <Route  path='/settings' exact component={Settings}></Route>
        <Route path='/changePassword' exact component={ChangePassword}></Route>
        
        
        
    </Switch>
)
export default PageRoutes;


