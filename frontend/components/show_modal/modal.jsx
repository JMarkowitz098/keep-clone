import React from 'react';
import NoteShowContainer from '../notes/note_show_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.updateModalState = this.updateModalState.bind(this)
        this.closeModalAndPushToIndex = this.closeModalAndPushToIndex.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setInitialModalState = this.setInitialModalState.bind(this)
    }
    
    setInitialModalState(initialState) {
        this.setState(initialState);
    }

    updateModalState(type, value) {
            this.setState({ [type]: value });
    }

    closeModalAndPushToIndex() {
        this.props.closeModal()
        this.props.history.push("/notes/")
    }

    shrinkNote(e) {
        // debugger
        // let note = e.currentTarget;
        
        // note.setAttribute('class', 'modal-child-close')
    }

    handleSubmit(e) {

        e.preventDefault();
        this.shrinkNote(e);
        if (this.state.title !== "" || this.state.body !== "") {
            this.props.updateNote(this.state)
                .then(() => this.setState({ title: '', body: '' }))
                .then(this.closeModalAndPushToIndex) 
        }
    }

    render() {
        const { modal } = this.props;
        
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
                />
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

export default Modal