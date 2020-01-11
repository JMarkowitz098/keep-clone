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
            this.setTitleAndCloseClass("cn-body-input", "cn-close-button", "none");
            this.changePlaceholderValues()
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const note = Object.assign({}, this.state);

        this.setTitleAndCloseClass("cn-body-input", "cn-close-button", "hide");
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
        let title = document.getElementById("cn-title-input");
        let body = document.getElementById("cn-body-input");
        title.setAttribute("placeholder", "Title");
        body.setAttribute("placeholder", "Take a note...");
    }

    setTitlePlaceholder() {
        let title = document.getElementById("cn-title-input");
        title.setAttribute("placeholder", "Take a note...");
    }

    setInitialFormAttrs(attrs) {
        const {formType} = this.props

        if (formType !== 'Edit Form') {
            this.setCreateFormAttrs(attrs)
        } else {
            this.setEditFormAttrs(attrs)
        }

        return attrs;
    }

    setCreateFormAttrs(attrs) {
        attrs['noteFormDiv'] = "cn-div";
        attrs['formContainer'] = "cn-form-container"
        attrs['titleInput'] = 'cn-title-input'
        attrs['bodyInput'] = 'cn-body-input'
        attrs['closeButton'] = 'cn-close-button'
        attrs['textAreaClass'] = 'hide'
        return attrs;
    }

    setEditFormAttrs(attrs) {
        attrs['noteFormDiv'] = "ef-div";
        attrs['formContainer'] = "ef-form-container"
        attrs['titleInput'] = 'ef-title-input'
        attrs['bodyInput'] = 'ef-body-input'
        attrs['closeButton'] = 'ef-close-button'
        attrs['textAreaClass'] = 'hide'
        return attrs;
    }


//this.props.history.push(`/notes/${note.id}`)
    render() {
        const {formType} = this.props
        let textAreaClass;
        let formAttrs = {}

        this.setInitialFormAttrs(formAttrs)
        { formType === 'Edit Form' ? textAreaClass = "" : textAreaClass = "hide"}


        return(
            <div id={formAttrs.noteFormDiv}>
                <form onSubmit={this.handleSubmit} className={formAttrs.formContainer}>
                    <input
                        type="text"
                        id={formAttrs.titleInput}
                        onChange={this.handleChange('title')}
                        onClick={this.handleTitleClick()}
                        value={this.state.title}
                        placeholder="Take a note..."
                        autoComplete="off"
                        />
                    <textarea
                        onChange={this.handleChange('body')}
                        value={this.state.body}
                        className={textAreaClass}
                        id={formAttrs.bodyInput}
                        autoComplete="off"
                        />
                    <input type="submit" value="Close" className={formAttrs.textAreaClass} id={formAttrs.closeButton}></input>
                </form>
            </div>
        )
    }
}

NoteForm = withRouter(NoteForm)
export default NoteForm