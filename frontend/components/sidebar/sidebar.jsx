import React from 'react'

class Sidebar extends React.Component {
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  

    render() {
        return(
            <div className='sidenav' id="mySidenav">
                <span><i className="fas fa-book-open"></i><a href="#">Portfolio</a></span>
                <span><i className="fab fa-linkedin-in"></i><a href="#">LinkedIn</a></span>
                <span><i className="far fa-envelope"></i><a href="#">Email</a></span>
            </div>
        )
    }
}




export default Sidebar;