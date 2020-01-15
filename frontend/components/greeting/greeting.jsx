import React from 'react'

class Greeting extends React.Component {

    componentWillUnmount() {
        this.closeNav()
    }

    loggedIn() {
        return (
            <header id="header" >
                <h1>{this.props.currentUser.email}</h1>
                <button id="logout-button" onClick={this.props.logout} >Log Out</button>
            </header>
        )

    }
    openNav() {
        let nav = document.getElementById("mySidenav")
        if (nav) {
            nav.style.width = "250px";
            nav.style.display = "inline-block";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById("note-index-form-container").style.margin = "5.7% 0 5% 0"

        }
    }

    closeNav() {
        let nav = document.getElementById("mySidenav")
        if (nav) {
            nav.style.width = "0";
            nav.style.display = "none";
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("note-index-form-container").style.margin = "5% 10%"
        }
    }

    toggleNav() {
        let nav = document.getElementById("mySidenav").style
        if (nav.width === "0px" || nav.width === "") {
            this.openNav()
        } else {
            this.closeNav()
        }
    }

    render() {
        return (
            <div className="header-fixed">
                <span >
                    <div id="header-menu-icon" onClick={() => this.toggleNav()}><i className="fas fa-bars"></i></div>
                    <img src={window.lburl} alt="lightbulb logo"/>
                    <h2>Keep</h2>
                </span>
                {this.loggedIn()}
            </div>
        )
    }
}

export default Greeting