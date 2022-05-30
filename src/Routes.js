import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './App';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Activate from './auth/Activate';
import Private from './core/Private';
import PrivateRoute from './auth/PrivateRoute';
import Admin from './core/Admin';
import AdminRoute from './auth/AdminRoute';
import Forgot from './auth/Forgot';
import Reset from './auth/Reset';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/auth/activate/:token" component={Activate} />
                <PrivateRoute exact path="/private" component={Private} />
                <AdminRoute exact path="/admin" component={Admin} />
                <Route exact path="/auth/forgot/password" component={Forgot} />
                <Route exact path="/auth/reset/password/:token" component={Reset} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;