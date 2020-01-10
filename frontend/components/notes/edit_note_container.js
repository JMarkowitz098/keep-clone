import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, updateNote } from '../../actions/note_actions';
import NoteForm from './note_form';

class EditNoteForm extends React.Component {

    componentDidMount() {
        fetchNote(this.props.match.params.id)
    }

    render() {
        // DO NOT MODIFY THIS FUNCTION
        const { action, note, formType } = this.props;

        // Hint: The report will not exist on the first render - what do we need to 
        // do to get it?
        if (!note) return null;
        return (
            <NoteForm
                action={action}
                formType={formType}
                note={note} />
        );
    }
}

const mstp = (state, ownProps) => {
    return {
        note: state.entities.notes[ownProps.match.params.id],
        formType: 'Edit Form'
    }
}

const mdtp = (dispatch) => ({
    action: report => dispatch(updateNote(report))
})

export default connect(mstp, mdtp)(EditNoteForm)