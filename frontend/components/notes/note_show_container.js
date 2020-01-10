import { connect } from 'react-redux'
import NoteShow from './note_show'
import { fetchNote } from '../../actions/note_actions'

const mstp = (state, ownProps) => {

    return ({
        note: state.entities.notes[ownProps.match.params.id]
    })
}

const mdtp = (dispatch) => ({
    fetchNote: (noteId) => dispatch(fetchNote(noteId)),
})
 
export default connect(mstp, mdtp)(NoteShow)