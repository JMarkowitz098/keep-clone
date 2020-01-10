import { connect } from 'react-redux';
import NoteForm from "../notes/note_form"
import { createNote } from "../../actions/note_actions"

const mstp = (state) => ({
    
})

const mdtp = (dispatch) => {
    return {
    action: note => dispatch(createNote(note))
    }
}

export default connect(mstp, mdtp)(NoteForm)