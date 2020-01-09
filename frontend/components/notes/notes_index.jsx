import React from 'react';

class NotesIndex extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        this.props.fetchNotes()
    }

    renderNotes() {
        return this.props.notes.map((note) => (
            <li>{note.title}</li>
        ))
        // return <li></li>
    }

    render() {
        return(<div>
            <h1>Notes Index</h1>
            <ul>
                {this.renderNotes()}
            </ul>
        </div>)
    }
}

export default NotesIndex