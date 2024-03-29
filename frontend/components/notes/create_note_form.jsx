import React from 'react'
import * as CreateNoteUtil from '../../util/create_note_form_util'

class CreateNoteForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.note || { title: '', body: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickMe = this.clickMe.bind(this)
    }

    componentDidMount() {
        document.addEventListener('click', this.clickMe);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.clickMe)
    }

    clickMe(event) {
        let cnForm = document.getElementById('cn-div');
        let isClickInside = cnForm.contains(event.target);
        if (!isClickInside) this.handleSubmit(event)
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    growTextArea() {
        let textField = document.getElementById('cn-body-input')
        if (textField.clientHeight < textField.scrollHeight) {
            textField.style.height = (textField.scrollHeight * 2 - textField.clientHeight) + "px";
        }
    }

    submittable() {
        if (window.getSelection().toString().length > 0) {
            return false;
        } else {
            return true;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.submittable()){
            const note = Object.assign({}, this.state);
            CreateNoteUtil.shrinkNoteForm()
            
            if (this.state.title !== "" || this.state.body !== "") {
                this.props.action(note)
                    .then(() => this.setState({ title: '', body: '' }))
                    .then(() => this.props.fetchNotes())
            }
        }
        

    }

    render() {

        return (
            <div id={'cn-div'}>
                <form onSubmit={this.handleSubmit} className={'cn-form-container'}>
                    <input
                        type="text"
                        id={'cn-title-input'}
                        onChange={this.handleChange('title')}
                        onClick={CreateNoteUtil.handleTitleClick}
                        value={this.state.title}
                        placeholder="Take a note..."
                        autoComplete="off"
                    />
                    <textarea
                        onChange={this.handleChange('body')}
                        value={this.state.body}
                        className={'hide'}
                        id={'cn-body-input'}
                        autoComplete="off"
                        onKeyUp={(e) => this.growTextArea()}
                    />
                    <input type="submit" value="Close" className={'hide'} id={'cn-close-button'}></input>
                </form>
            </div>
        )
    }
}

export default CreateNoteForm