import React from 'react';


class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let user = {
            email: "superman@gmail.com",
            password: "greenrock"
        }
        this.props.login(user)
            .then(() => this.props.history.push('/notes'))
    }

    render() {
        return (
            <div id="splash-container">
                <div id="splash-overlay">
                    <span>
                        <img src={window.lburl} alt="lightbulb logo" />
                        <h3>Google Keep Tribute</h3>
                    </span>
                    <span id="splash-buttons">
                        <button
                            onClick={() => this.props.history.push('/signup')}
                        >Sign Up</button>
                        <button
                            onClick={() => this.props.history.push('/login')}>
                            Log In</button>
                        <button onClick={this.handleClick}>Use Demo Account</button>
                    </span>
                </div>


                <video autoPlay loop muted>
                    <source src={window.video}/>
                </video>
               
            </div>
        )
    }
}

export default Splash;