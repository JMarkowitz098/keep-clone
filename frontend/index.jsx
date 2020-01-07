import React from 'react'
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login, logout, createUser} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login
    window.logout = logout
    // TESTING END

    ReactDOM.render(<Root store={store} />, root);
});