import React from 'react'
import { connect } from 'react-redux'
import NoteShow from './note_show'
import { fetchNote, deleteNote } from '../../actions/note_actions'
import { closeModal } from '../../actions/modal_actions'

const mstp = (state, ownProps) => {
    return ({
        // note: state.entities.notes[ownProps.match.params.id]
    })
}

const mdtp = (dispatch) => ({
    fetchNote: (noteId) => dispatch(fetchNote(noteId)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    deleteNote: (noteId) => dispatch(deleteNote(noteId))
})
 
export default connect(mstp, mdtp)(NoteShow)