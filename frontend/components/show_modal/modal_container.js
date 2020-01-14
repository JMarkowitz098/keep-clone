import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { fetchNote, updateNote } from '../../actions/note_actions'
import { withRouter } from 'react-router-dom'
import Modal from './modal'

const mapStateToProps = (state, ownProps) => {
    let url = ownProps.location.pathname.split("/");
    let id = parseInt(url[url.length - 1])

    return {
        modal: state.ui.modal,
        note: state.entities.notes[id],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateNote: (note) => dispatch(updateNote(note)),
        fetchNote: (note) => dispatch(fetchNote(note))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));