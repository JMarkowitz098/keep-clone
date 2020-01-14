import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchNotes, updateNote, deleteNote } from '../../actions/note_actions';
import { closeModal } from "../../actions/modal_actions"
import EditNoteForm from './edit_note_form';


const mstp = (state, ownProps) => {
    let url = ownProps.location.pathname.split("/");
    let id = parseInt(url[url.length - 1])
    return {
        note: state.entities.notes[id],
        formType: "Edit Form"
    }
}

const mdtp = (dispatch) => {
    return {
        action: report => dispatch(updateNote(report)),
        fetchNotes: () => dispatch(fetchNotes()),
        closeModal: () => dispatch(closeModal()),
        deleteNote: (noteId) => dispatch(deleteNote(noteId))
    }
}


export default withRouter(connect(mstp, mdtp)(EditNoteForm))