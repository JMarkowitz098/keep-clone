import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchNote, fetchNotes, updateNote } from '../../actions/note_actions';
import { closeModal } from "../../actions/modal_actions"
import NoteForm from './note_form';

class EditNoteForm extends React.Component {

    componentDidMount() {
        fetchNote(this.props.match.params.id)
    }

    render() {
        const { action, note, formType, fetchNotes, closeModal } = this.props;

        // Hint: The report will not exist on the first render - what do we need to 
        // do to get it?
        if (!note) return null;
        return (
            <NoteForm
                action={action}
                formType={formType}
                note={note} 
                fetchNotes={fetchNotes}
                closeModal={closeModal}
            />
        );
    }
}

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
        closeModal: () => dispatch(closeModal())
    }
}


export default withRouter(connect(mstp, mdtp)(EditNoteForm))