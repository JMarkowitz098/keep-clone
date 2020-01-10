import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {

    loggedIn() {
        return (
            <header id="header" >
                <h1>{this.props.currentUser.email[0]}</h1>
                <button onClick={this.props.logout} >Log Out</button>
            </header>
        )

    }

    render() {
        return (
            <div className="header-fixed">
                <span>
                    <div >M</div>
                    <div>L</div>
                    <h2>Keep</h2>
                </span>
                {this.loggedIn()}
            </div>
        )
    }
}

export default Greeting