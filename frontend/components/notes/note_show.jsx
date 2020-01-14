import React from 'react'
import { Link } from 'react-router-dom'
import EditNoteContainer from './edit_note_container'

class NoteShow extends React.Component {

    componentDidMount() {
        this.props.fetchNote(this.props.note.id)
            .then(response => {
                this.props.setInitialModalState(response.note)
            })
        this.handleClick = this.handleClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleClick() {
        return (() => {
            this.props.closeModal()
        })
    }

    handleDeleteClick(noteId) {
        this.props.deleteNote(noteId)
            this.props.closeModal()
    }

    render() {
        const {note} = this.props
        return(
            <div id="edit-note-container">
                <EditNoteContainer 
                    updateModalState={this.props.updateModalState} 
                    noteId={note.id}/>
            </div>
        )
    }
}

export default NoteShow