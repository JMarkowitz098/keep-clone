import React from 'react'

class Greeting extends React.Component {

    loggedIn() {
        return (
            <header id="header" >
                <h1>{this.props.currentUser.email}</h1>
                <button id="logout-button" onClick={this.props.logout} >Log Out</button>
            </header>
        )

    }
    openNav() {
        if (document.getElementById("mySidenav")) {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById("note-index-form-container").style.margin = "5% 0"
            document.getElementById("mySidenav").style.display = "inline-block";

        }
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    closeNav() {
        if (document.getElementById("mySidenav")) {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("note-index-form-container").style.margin = "5% 10%"
            document.getElementById("mySidenav").style.display = "none";
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