import React from 'react'
import { changeNoteColor } from '../../util/color_util'


class EditNoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.note || { title: '', body: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this)
    }

    componentDidMount() {
        changeNoteColor(this, this.props.note.color)
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

    handleColorChange(color) {
        changeNoteColor(this, color)
        this.props.updateModalState('color', color)
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
        this.props.action(note)
            .then(() => this.setState({ title: '', body: '' }))
            .then(() => this.props.fetchNotes())
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
            <div id={'ef-div'} >
                <form className={'ef-form-container'}>
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
                
                    <input type="submit" value="Close" id={'ef-close-button'} onClick={this.handleSubmit} />
                </form>
                <div id="ef-buttons">
                    <button
                        onClick={() => this.handleDeleteClick(this.props.noteId)}
                        id="show-delete-button"
                    ><i className="far fa-trash-alt"></i>
                    </button>
                    <button id= "blue-button" className="color-button" onClick={() => this.handleColorChange('blue') }></button>
                    <button className="color-button" onClick={() => this.handleColorChange('yellow') }>Yellow</button>
                    <button className="color-button" onClick={() => this.handleColorChange('green') }>Green</button>
                    <button className="color-button" onClick={() => this.handleColorChange('red') }>Red</button>
                    <button className="color-button" onClick={() => this.handleColorChange('purple') }>Purple</button>
                </div>
            </div>
        )
    }
}

export default EditNoteForm