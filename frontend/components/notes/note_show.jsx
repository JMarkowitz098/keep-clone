import React from 'react'
import { Link } from 'react-router-dom'
import EditNoteContainer from './edit_note_container'

class NoteShow extends React.Component {

    componentDidMount() {
        // this.props.fetchNote(this.props.match.params.id)
        this.props.fetchNote(this.props.note.id)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        return (() => {
            this.props.closeModal()
        })
    }


    render() {
        return(
            <div>
                <EditNoteContainer />
                <div onClick={this.handleClick}></div>
            </div>
        )
    }
}

export default NoteShow