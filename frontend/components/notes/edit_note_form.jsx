import React from 'react'
import { Link, withRouter } from 'react-router-dom';


class EditNoteForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.note || { title: '', body: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
            this.props.updateModalState(type, e.target.value)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const note = Object.assign({}, this.state);
        this.closeModalAndPushToIndex()
        if (this.state.title !== "" || this.state.body !== "") {
            this.props.action(note)
                .then(() => this.setState({ title: '', body: '' }))
                .then(() => this.props.fetchNotes())
        }
    }

    closeModalAndPushToIndex() {
        this.props.closeModal()
        this.props.history.push("/notes/")
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
                        placeholder="Take a note..."
                        autoComplete="off"
                    />
                    <textarea
                        onChange={this.handleChange('body')}
                        value={this.state.body}
                        id={'ef-body-input'}
                        autoComplete="off"
                    />
                
                    <input type="submit" value="Close" id={'ef-close-button'}></input>
                </form>
            </div>
        )
    }
}

export default EditNoteForm