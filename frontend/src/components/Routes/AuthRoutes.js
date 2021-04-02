import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from '../Auth/Login';
import Signup from '../Auth/Signup'
const AuthRoutes=()=>(
    
        <Switch>
            <Route path='/signup' exact component={Signup}></Route>
            <Route path='/login'  component={Login}></Route>

        </Switch>
    )
export default AuthRoutes

