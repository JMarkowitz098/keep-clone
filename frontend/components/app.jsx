import React from "react";
import { Route, Switch } from 'react-router-dom'
import GreetingContainer from "./greeting/greeting_container"
import LoginFormContainer from './sessions/login_form_container'
import SignupFormContainer from './sessions/create_user_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
    <div>
        <header>
            <link href="https://fonts.googleapis.com/css?family=Public+Sans&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"></link>
            {/* <h1>KEEP GOING BABY</h1> */}
            {/* <GreetingContainer /> */}
        </header>
        
        <ProtectedRoute path="/" component={GreetingContainer} />
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
        
    </div>
);

export default App;