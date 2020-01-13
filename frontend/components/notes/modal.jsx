import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NoteShowContainer from '../notes/note_show_container';
import { fetchNote, updateNote } from '../../actions/note_actions'
import { withRouter } from 'react-router-dom'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.updateModalState = this.updateModalState.bind(this)
        this.closeModalAndPushToIndex = this.closeModalAndPushToIndex.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setInitialModalState = this.setInitialModalState.bind(this)
    }
    
    // componentDidMount() {
    //     this.props.fetchNote(this.props.match.params.id)
    // }

    setInitialModalState(initialState) {
        this.setState(initialState);
    }

    updateModalState(type, value) {
            this.setState({ [type]: value });
            // this.setState({ [type]: e.target.value || e.target.innerText });
    }

    closeModalAndPushToIndex() {
        this.props.closeModal()
        this.props.history.push("/notes/")
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.title !== "" || this.state.body !== "") {
            this.props.updateNote(this.state)
                .then(() => this.setState({ title: '', body: '' }))
                .then(this.closeModalAndPushToIndex) 
        }
    }

    
    render() {
        const { modal, closeModal } = this.props;

        if (!modal) {
            return null;
        }
        let component;

        switch (modal.modal) {

            case 'show':
                component = <NoteShowContainer 
                    note={modal.note}
                    updateModalState={this.updateModalState} 
                    setInitialModalState={this.setInitialModalState}
                />;
                break;
            default:
                return null;
        }

        return (
            <div className="modal-background" onClick={this.handleSubmit}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = (state,ownProps) => {
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