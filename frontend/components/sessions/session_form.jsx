import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginGuest = this.loginGuest.bind(this);
        this.bindEnter = this.bindEnter.bind(this);
    }

    componentWillUnmount () {
        this.props.clearErrors()
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

    loginGuest(e) {
        this.setState({
            email: "superman@gmail.com",
            password: "greenrock"
        })
        console.log(this.state)
    }

    handleErrors() {
        if (this.props.errors.length !== 0) this.changeInputColorOnError()

        return (
            this.props.errors.map((error, idx) => (
                <li key={idx}>{error}</li>
            ))
        )
    }

    bindEnter(e) {
        if (e.which === 13) {
                this.handleSubmit(e);
        }
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
            // .then(() => this.props.history.push('./index'))
    }

    render() {
        let signinTrue;
        this.props.formType === 'Log In' ? signinTrue = true : signinTrue = false;
        return (
            <div className="container">
                {this.googleLogo()}
                {!signinTrue ? <h2>Create Your Google Account</h2> : <h2>Sign In</h2>}

                <div className="box">
                    <form onSubmit={this.handleSubmit} onKeyPress={this.bindEnter} >
                        <br/>
                        <div className="email-div">
                            <input 
                                type="text" 
                                onChange={this.handleInput('email')} 
                                className="email-input"
                                value={this.state.email}
                                required
                                />
                            <label className="label-email-input">Email</label>
                        </div>
                        <br />
                        <div>
                            <input 
                                type="password" 
                                onChange={this.handleInput('password')} 
                                className="password-input"
                                value={this.state.password}
                                required
                                />
                            <label className="label-password-input">Enter your password</label>
                        </div>
                        <br />
                    <ul className='errors'>
                        {this.handleErrors()}
                    </ul>
                    {signinTrue ? (<input 
                                        type="submit"
                                        onClick={this.loginGuest} 
                                        value="Use Guest Account" 
                                        id="guest-input"
                                    />) : null}
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

    //Styling for errors---------------------------
    changeInputColorOnError() {
        let inputsAndLabelInputs = this.resetInputsAndLabelsArrays();
        this.fillInputsAndLabelInputs(inputsAndLabelInputs);
        this.setInputAndLabelAttributes(inputsAndLabelInputs);
        inputsAndLabelInputs = this.resetInputsAndLabelsArrays(inputsAndLabelInputs);

        this.props.errors.forEach((error) => {
            if (error === "Email has already been taken") {
                this.addEmailErrorIds(inputsAndLabelInputs)
            } else if (error === "Password is too short (minimum is 6 characters)") {
                this.addPasswordErrorIds(inputsAndLabelInputs)
            } else {
                this.fillInputsAndLabelInputs(inputsAndLabelInputs);
            }
        })
        this.setInputAndLabelAttributes(inputsAndLabelInputs, 'has-errors', 'label-has-errors')
    }

    resetInputsAndLabelsArrays(inputsAndLabelInputs = [], inputs = [], labelInputs = []) {
        inputs = []; []
        labelInputs = [];
        inputsAndLabelInputs = [inputs, labelInputs];
        return inputsAndLabelInputs;
    }

    addErrorIds(inputArr, className) {
        inputArr.push(Array.from(document.getElementsByClassName(className))[0]);
        return inputArr;
    }

    addEmailErrorIds(inputsAndLabelInputs) {
        inputsAndLabelInputs[0] = this.addErrorIds(inputsAndLabelInputs[0], 'email-input');
        inputsAndLabelInputs[1] = this.addErrorIds(inputsAndLabelInputs[1], 'label-email-input');
        return inputsAndLabelInputs;
    }

    addPasswordErrorIds(inputsAndLabelInputs) {
        inputsAndLabelInputs[0] = this.addErrorIds(inputsAndLabelInputs[0], 'password-input')
        inputsAndLabelInputs[1] = this.addErrorIds(inputsAndLabelInputs[1], 'label-password-input')
        return inputsAndLabelInputs;
    }

    fillInputsAndLabelInputs(inputsAndLabelInputs) {
        this.addEmailErrorIds(inputsAndLabelInputs)
        this.addPasswordErrorIds(inputsAndLabelInputs)
        return inputsAndLabelInputs;
    }

    setInputAndLabelAttributes(inputsAndLabelInputs, inputAtr, labelAtr) {
        inputsAndLabelInputs[0].forEach((ele) => ele.setAttribute("id", inputAtr));
        inputsAndLabelInputs[1].forEach((ele) => ele.setAttribute("id", labelAtr));
    }


    //End styling for errors---------------------------
}

export default SessionForm;