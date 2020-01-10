import { connect } from 'react-redux';
import NotesIndex from "../notes/notes_index"
import { fetchNotes, deleteNote } from "../../actions/note_actions"

const mstp = (state) => {
    return ({
            notes: Object.values(state.entities.notes)
    })
}

const mdtp = (dispatch) => ({
    fetchNotes: () => dispatch(fetchNotes()),
    deleteNote: (noteId) => dispatch(deleteNote(noteId))
})

export default connect (mstp, mdtp)(NotesIndex)