import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    signup() {
        return (
            <div className="login-link">
                <Link to={"/login"} >Log In</Link>
            </div>
        )
    }

    login() {
        return (
            <div className="signup-link">
                <Link to={"/signup"} >Create Account</Link>
            </div>
        )
    }

    googleLogo(){
        return(
            <div className = "google-logo">
                <span className="gG" >G</span>
                <span className="oe" >o</span>
                <span className="o" >o</span>
                <span className="gG" >g</span>
                <span className="l" >l</span>
                <span className="oe" >e</span>
            </div> 
        )
    }

    handleErrors() {
        return (
            this.props.errors.map((error, idx) => (
                <li key={idx}>{error}</li>
            ))
        )
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('./'));
    }

    render() {
        let signinTrue
        this.props.formType === 'Log In' ? signinTrue = true : signinTrue = false
        return (
            <div className="container">
                {this.googleLogo()}
                {!signinTrue ? <h2>Create Your Google Account</h2> : <h2>Sign In</h2>}
                {signinTrue ? <h3 className="use-account">Use your Google Account</h3> : null}
                <form onSubmit={this.handleSubmit}>
                    <label>Email or phone
                        <br/>
                        <input type="text" onChange={this.handleInput('email')} />
                    </label>
                    <br />
                    <label>Enter your password
                        <br/>
                        <input type="text" onChange={this.handleInput('password')} />
                    </label>
                    <br />
                    <button type="submit">Next</button>
                </form>
                <br/>
                {this.props.formType === 'Create User' ? this.signup() : this.login()}
                <ul>
                    {this.handleErrors()}
                </ul>
            </div>
        );
    }
}

export default SessionForm;