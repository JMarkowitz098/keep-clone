import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
    loggedIn() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.email}</h1>
                <button onClick={this.props.logout} >Log Out</button>
            </div>
        )

    }

    notLoggedIn() {
        return (
            <div>
                <Link to="/signup" >Sign Up</Link>
                <br/>
                <Link to="/login" >Log In</Link>
            </div>
        )
    };

    render() {
        return (
            <div>
                {this.props.currentUser ? this.loggedIn() : this.notLoggedIn()}
            </div>
        )
    }
}

export default Greeting