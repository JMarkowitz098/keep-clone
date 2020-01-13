import React from 'react'
import { Link } from 'react-router-dom'
import EditNoteContainer from './edit_note_container'

class NoteShow extends React.Component {

    componentDidMount() {
        // this.props.fetchNote(this.props.match.params.id)
        this.props.fetchNote(this.props.note.id)
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
        const {note, deleteNote} = this.props
        return(
            <div>
                <EditNoteContainer />
                <div id="show-buttons" ></div>
                    <div onClick={this.handleClick}>
                    <button
                        onClick={() => this.handleDeleteClick(note.id)}
                        id="show-delete-button"
                        ><i className="far fa-trash-alt"></i>
                    </button>

                </div>
            </div>
        )
    }
}

export default NoteShow