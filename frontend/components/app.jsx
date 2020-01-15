import React from "react";
import { Route, Switch } from 'react-router-dom'
import GreetingContainer from "./greeting/greeting_container"
import NotesIndexContainer from "./notes/notes_index_container"
import LoginFormContainer from './sessions/login_form_container'
import SignupFormContainer from './sessions/create_user_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import ModalContainer from '../components/show_modal/modal_container'
const App = () => (
    <div>
        <header>
            
        </header>
        
        <ModalContainer />
        <ProtectedRoute path="/" component={GreetingContainer} />
        <ProtectedRoute path="/" component={SideBarContainer} />
        <ProtectedRoute path="/notes" component={NotesIndexContainer} />
        
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/" component={SignupFormContainer} />
        </Switch>
        
    </div>
);

export default App;