import { connect } from 'react-redux';
import CreateNoteForm from "../notes/create_note_form"
import { createNote, fetchNotes } from "../../actions/note_actions"

const mstp = (state) => ({
    
})

const mdtp = (dispatch) => ({
    action: note => dispatch(createNote(note)),
    fetchNotes: () => dispatch(fetchNotes())
})

export default connect(mstp, mdtp)(CreateNoteForm)