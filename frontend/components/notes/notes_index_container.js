import { connect } from 'react-redux';
import NotesIndex from "../notes/notes_index"
import { fetchNotes } from "../../actions/note_actions"

const mstp = (state) => {
    return ({
            notes: Object.values(state.entities.notes)
    })
}

const mdtp = (dispatch) => ({
    fetchNotes: () => dispatch(fetchNotes())
})

export default connect (mstp, mdtp)(NotesIndex)