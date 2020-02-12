import React from 'react'

class Sidebar extends React.Component {
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */


    render() {
        return (
            <div className='sidenav' id="mySidenav">
                <img className="photo" src={window.photo} alt="Photo of creator"/>
                <h3>Jared Markowitz</h3>
                <span onClick={() => window.open('https://www.jaredmarkowitz.com/')}>
                    <div><i className="fas fa-book-open"></i></div>
                    <a href="https://www.jaredmarkowitz.com/">Portfolio</a>
                </span>
                <span onClick={() => window.open('https://www.linkedin.com/in/jmarkowitz098/')}>
                    <div><i className="fab fa-linkedin-in"></i></div>
                    <a href="https://www.linkedin.com/in/jmarkowitz098/" target="_blank" >LinkedIn</a>
                </span>
                <span onClick={() => window.open('https://github.com/JMarkowitz098/keep-clone')}>
                    <div><i className="fab fa-github"></i></div>
                    <a href="https://github.com/JMarkowitz098/keep-clone">GitHub</a>
                </span>
                <span onClick={() => window.open('https://angel.co/jared-markowitz')}>
                    <div><i className="fab fa-angellist"></i></div>
                    <a href="https://angel.co/jared-markowitz">Angel List</a>
                </span>
            </div>
        )
    }
}




export default Sidebar;