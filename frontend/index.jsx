import React from "react";
import ReactDOM from "react-dom";
import {login, logout, createUser} from './util/session_api_util';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to Keep</h1>, root);

    //For Testing
    window.createUser = createUser;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

});