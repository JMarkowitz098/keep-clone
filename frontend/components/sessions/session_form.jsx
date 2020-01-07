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
            <div className="link">
                <Link to={"/login"} >Log In</Link>
            </div>
        )
    }

    login() {
        return (
            <div className="link">
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
                {!signinTrue ? <h2 className="create" >Create Your Google Account</h2> : <h2 className="signin" >Sign In</h2>}
                {signinTrue ? <h3 className="use-account">Use your Google Account</h3> : null}
                <div className="box">
                    <form onSubmit={this.handleSubmit}>
                        <br/>
                        <div className="email-div">
                            <input 
                                type="text" 
                                onChange={this.handleInput('email')} 
                                className="email-input" 
                                />
                            <label>Email</label>
                        </div>
                        <br />
                        <div>
                            <input 
                                type="password" 
                                onChange={this.handleInput('password')} 
                                className="password-input" 
                            />
                            <label >Enter your password</label>
                        </div>
                        <br />
                        <button type="submit">Next</button>
                    </form>
                </div>
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