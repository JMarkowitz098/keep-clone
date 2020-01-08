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
            <div className="link-div">
                <Link className="link" to={"/login"} >Log In</Link>
            </div>
        )
    }

    login() {
        return (
            <div className="link-div">
                <Link className="link" to={"/signup"} >Create Account</Link>
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

    loginGuest() {
        this.setState({
            username: "superman",
            password: "greenrock"
        })
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

                <div className="box">
                    <form onSubmit={this.handleSubmit}>
                        <br/>
                        <div className="email-div">
                            <input 
                                type="text" 
                                onChange={this.handleInput('email')} 
                                className="email-input" 
                                required
                                />
                            <label>Email</label>
                        </div>
                        <br />
                        <div>
                            <input 
                                type="password" 
                                onChange={this.handleInput('password')} 
                                className="password-input" 
                                required
                                />
                            <label >Enter your password</label>
                        </div>
                        <br />
                    <ul className='errors'>
                        {this.handleErrors()}
                    </ul>
                    <button onClick={this.loginGuest} >Use Guest Account</button>
                    <div className="submit-link-div">
                        {!signinTrue ? this.signup() : this.login()}
                        <button type="submit" className="next-button" >Next</button>
                    </div>
                    </form>
                </div>
                <br/>
            </div>
        );
    }
}

export default SessionForm;