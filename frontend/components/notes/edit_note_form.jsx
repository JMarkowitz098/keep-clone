import React from 'react'
import { Link, withRouter } from 'react-router-dom';


class EditNoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.note || { title: '', body: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.growTextArea()
        //Figure out how to make it not go off top of screen
    }

    handleChange(type) {
        return (e) => {
            this.growTextArea()
            this.setState({ [type]: e.target.value });
            this.props.updateModalState(type, e.target.value)
        }
    }

    growTextArea() {
        let textField = document.getElementById('ef-body-input')
        if (textField.clientHeight < textField.scrollHeight) {
            textField.style.height = (textField.scrollHeight * 2 - textField.clientHeight - 10) + "px";
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const note = Object.assign({}, this.state);
        if (this.state.title !== "" || this.state.body !== "") {
            this.props.action(note)
            .then(() => this.setState({ title: '', body: '' }))
            .then(() => this.props.fetchNotes())
        }
        this.closeModalAndPushToIndex()
    }

    closeModalAndPushToIndex() {
        this.props.closeModal()
        this.props.history.push("/notes/")
    }

    handleDeleteClick(noteId) {
        this.props.deleteNote(noteId)
            .then(this.props.history.push("/notes/"))
        this.props.closeModal()
    }

    render() {

        return (
            <div id={'ef-div'}>
                <form onSubmit={this.handleSubmit} className={'ef-form-container'}>
                    <input
                        type="text"
                        id={'ef-title-input'}
                        onChange={this.handleChange('title')}
                        value={this.state.title}
                        placeholder="Title"
                        autoComplete="off"
                    />
                    <textarea
                        onChange={this.handleChange('body')}
                        value={this.state.body}
                        id={'ef-body-input'}
                        autoComplete="off"
                        placeholder="Take a note..."
                        onKeyUp={(e) => this.growTextArea()}

                    />
                
                    <input type="submit" value="Close" id={'ef-close-button'}></input>
                </form>
                <button
                    onClick={() => this.handleDeleteClick(this.props.noteId)}
                    id="show-delete-button"
                ><i className="far fa-trash-alt"></i>
                </button>
            </div>
        )
    }
}

export default EditNoteForm