import React from "react";
import { Route, Redirect } from 'react-router-dom'
import GreetingContainer from "./greeting/greeting_container"
import LoginFormContainer from './sessions/login_form_container'
import SignupFormContainer from './sessions/create_user_form_container'
import { AuthRoute } from '../util/route_util'

const App = () => (
    <div>
        <header>
            <h1>KEEP GOING BABY</h1>
            <GreetingContainer />
        </header>
        {/* Better practice to create protected routes (see bench bnb) */}
        <Redirect from='/' to='/login' /> 
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;