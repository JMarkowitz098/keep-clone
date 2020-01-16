import React from 'react'

class Sidebar extends React.Component {
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  

    render() {
        return(
            <div className='sidenav' id="mySidenav">
                {/* <span>
                    <div><i className="fas fa-book-open"></i></div>
                    <a href="#">Portfolio</a>
                </span> */}
                <span onClick={() => window.open('https://www.linkedin.com/in/jmarkowitz098/')}>
                    <div><i className="fab fa-linkedin-in"></i></div>
                    <a href="https://www.linkedin.com/in/jmarkowitz098/" target="_blank" >LinkedIn</a>
                </span>
                {/* <span>
                    <div><i className="far fa-envelope"></i></div>
                    <a href="#">Email</a>
                </span> */}
            </div>
        )
    }
}




export default Sidebar;