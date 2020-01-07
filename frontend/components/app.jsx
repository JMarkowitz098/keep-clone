import React from "react";
import { Route } from 'react-router-dom'
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
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;