import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from '../Auth/Login';
import Signup from '../Auth/Signup'
import ForgotPassword from '../Forms/ForgotPassword'
import ForgotPasswordResetConfirm from '../Forms/ForgotPasswordResetConfirm'

const AuthRoutes=()=>(
    
        <Switch>
            <Route path='/signup' exact component={Signup}></Route>
            <Route path='/login'  exact component={Login}></Route>
            <Route path='/forgotPassword' exact component={ForgotPassword}></Route>
            <Route path='/forgotpasswordresetconfirm' exact component={ForgotPasswordResetConfirm}></Route>

        </Switch>
    )
export default AuthRoutes

