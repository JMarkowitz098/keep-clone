import React from 'react'
import { Link, withRouter } from 'react-router-dom';

class NoteForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.note || {title: '', body: ''}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleTitleClick() {
        return (e) => {
            this.setTitleAndCloseClass("body-input", "close-button", "none");
            this.changePlaceholderValues()
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const note = Object.assign({}, this.state);

        this.setTitleAndCloseClass("body-input", "close-button", "hide");
        this.setTitlePlaceholder()
        if (this.state.title !== "" || this.state.body !== ""){
            this.props.action(note)
            .then(() => this.props.fetchNotes())
            // this.props.createNote(note)
            this.setState({title: '',body: ''})
        }
            
    }

    setTitleAndCloseClass (titleId, closeId, classVal) {
        let body = document.getElementById(titleId);
        let button = document.getElementById(closeId);
        body.setAttribute("class", classVal);
        button.setAttribute("class", classVal);
    }

    changePlaceholderValues() {
        let title = document.getElementById("title-input");
        let body = document.getElementById("body-input");
        title.setAttribute("placeholder", "Title");
        body.setAttribute("placeholder", "Take a note...");
    }

    setTitlePlaceholder() {
        let title = document.getElementById("title-input");
        title.setAttribute("placeholder", "Take a note...");
    }
//this.props.history.push(`/notes/${note.id}`)
    render() {
        const {formType} = this.props
        return(
            <div id="note-form-div">
                {formType === 'Edit Form' ? <Link to='/notes'>Back to Notes</Link> : null}
                <form onSubmit={this.handleSubmit} className="note-form-container">
                    <input
                        type="text"
                        id="title-input"
                        onChange={this.handleChange('title')}
                        onClick={this.handleTitleClick()}
                        value={this.state.title}
                        placeholder="Take a note..."
                        autoComplete="off"
                        />
                    <textarea
                        onChange={this.handleChange('body')}
                        value={this.state.body}
                        className="hide"
                        id="body-input"
                        autoComplete="off"
                        />
                    <input type="submit" value="Close" className="hide" id="close-button"></input>
                </form>
            </div>
        )
    }
}

NoteForm = withRouter(NoteForm)
export default NoteForm