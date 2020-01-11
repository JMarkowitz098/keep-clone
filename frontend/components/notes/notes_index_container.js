import { connect } from 'react-redux';
import NotesIndex from "../notes/notes_index"
import { fetchNotes, deleteNote } from "../../actions/note_actions"
import { createNote } from '../../util/note_api_util';
import { openModal, closeModal } from "../../actions/modal_actions" 
const mstp = (state) => {
    return ({
            notes: Object.values(state.entities.notes)
    })
}

const mdtp = (dispatch) => ({
    fetchNotes: () => dispatch(fetchNotes()),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    createNote: (note) => dispatch(createNote(note)),
    openModal: (modal, note) => dispatch(openModal(modal,note)),
    closeModal: () => dispatch(closeModal())
})

export default connect (mstp, mdtp)(NotesIndex)