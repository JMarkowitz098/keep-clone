import React from 'react';
import NoteIndexItem from './note_index_item'
import CreateNoteContainer from './create_note_container'

class NotesIndex extends React.Component {
    constructor (props){
        super(props)
       this.parentDeleteNote = this.parentDeleteNote.bind(this)
    }

    componentDidMount() {
        this.props.fetchNotes()
    }

    parentDeleteNote(id) {
        this.props.deleteNote(id)
            .then(() => this.props.fetchNotes())
    }

  

    renderNotes() {
        return this.props.notes.map((note) => (
            <NoteIndexItem key={note.id} note={note} position={note.position} deleteNote={this.parentDeleteNote}/>
        ))
    }

    render() {
        return(
        <div>
            <h1>Notes Index</h1>
            <ul>{this.renderNotes()}</ul>
            <CreateNoteContainer />

        </div>)
    }
}
export default NotesIndex