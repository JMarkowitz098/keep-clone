import React from 'react'
import { Link } from 'react-router-dom'
import EditNoteContainer from './edit_note_container'

class NoteShow extends React.Component {

    componentDidMount() {
        // this.props.fetchNote(this.props.match.params.id)
        this.props.fetchNote(this.props.note.id)
    }


    render() {

        const {note} = this.props
        return(
            <div>
                <h1>NOTE SHOW PAGE</h1>
                {/* <h2>{note.title}</h2>
                <p></p> */}
                <EditNoteContainer />
                <div onClick={() => this.props.closeModal()}><Link to='/notes'>Back to Notes</Link></div>
            </div>
        )
    }
}

export default NoteShow