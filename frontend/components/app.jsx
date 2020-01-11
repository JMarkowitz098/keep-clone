import React from "react";
import { Route, Switch } from 'react-router-dom'
import GreetingContainer from "./greeting/greeting_container"
import NotesIndexContainer from "./notes/notes_index_container"
import LoginFormContainer from './sessions/login_form_container'
import SignupFormContainer from './sessions/create_user_form_container'
import NoteShowContainer from './notes/note_show_container'
import NoteEditContainer from './notes/edit_note_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import Modal from '../components/notes/modal'

const App = () => (
    <div>
        <header>
            <link href="https://fonts.googleapis.com/css?family=Public+Sans&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"></link>
        </header>
        
        <Modal />
        <ProtectedRoute path="/" component={GreetingContainer} />
        <ProtectedRoute path="/notes" component={NotesIndexContainer} />
        {/* <ProtectedRoute path="/notes/:id" component={NoteShowContainer} /> */}
        <ProtectedRoute path="/notes/:id" component={NoteEditContainer} />
        
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/" component={SignupFormContainer} />
        </Switch>
        
    </div>
);

export default App;