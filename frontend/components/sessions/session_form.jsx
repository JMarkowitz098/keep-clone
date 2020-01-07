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
            <div>
                <h1>Sign Up</h1>
                <Link to={"/login"} ></Link>
            </div>
        )
    }

    login() {
        return (
            <div>
                <h1>Log In</h1>
                <Link to={"/signup"} ></Link>
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
        return (
            <div>
                {this.props.formType === 'Create User' ? this.signup() : this.login()}
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" onChange={this.handleInput('email')} />
                    </label>
                    <br />
                    <label>Password:
                        <input type="text" onChange={this.handleInput('password')} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {this.handleErrors()}
                </ul>
            </div>
        );
    }
}

export default SessionForm;