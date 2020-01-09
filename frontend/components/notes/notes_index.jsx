import React from 'react';

class NotesIndex extends React.Component {

    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
        return(<div>IT WORK</div>)
    }
}

export default NotesIndex