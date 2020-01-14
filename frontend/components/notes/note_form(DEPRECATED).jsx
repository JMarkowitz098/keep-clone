import React from 'react'
import { Link, withRouter } from 'react-router-dom';


class NoteForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.note || {title: '', body: ''}
        this.formAttrs = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleClick = this.handleTitleClick.bind(this)
    }

    handleChange(type) {
        return (e) => {
           
            this.setState({ [type]: e.target.value });
                // this.setState({ [type]: e.target.value || e.target.innerText });
            
            if (this.props.formType === "Edit Form") {
                this.props.updateModalState(type, e.target.value)
            }
        };
    }

    handleTitleClick() {
        return (e) => {
            this.setTitleAndCloseClass(
                    this.formAttrs['bodyInput'], 
                    this.formAttrs['closeButton'], "none");
            this.changePlaceholderValues()
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const note = Object.assign({}, this.state);

        this.setTitlePlaceholder()
        // this.setBodyInnerText()
        { this.props.formType === "Edit Form" ? this.closeModalAndPushToIndex() : null}
        if (this.state.title !== "" || this.state.body !== ""){
            this.props.action(note)
            .then(() => this.setState({title: '',body: ''}))
            .then(() => this.props.fetchNotes())
        }
        this.setTitleAndCloseClass(this.formAttrs['bodyInput'], this.formAttrs['closeButton'], "hide");
        
    }

    closeModalAndPushToIndex() {
        this.props.closeModal()
        this.props.history.push("/notes/")
    }

    setTitleAndCloseClass (titleId, closeId, classVal) {
        let body = document.getElementById(titleId);
        let button = document.getElementById(closeId);
        body.setAttribute("class", classVal);
        button.setAttribute("class", classVal);
    }

    changePlaceholderValues() {
        let title = document.getElementById(this.formAttrs['titleInput']);
        let body = document.getElementById(this.formAttrs['bodyInput']);
        title.setAttribute("placeholder", "Title");
        body.setAttribute("placeholder", "Take a note...");
        // body.setAttribute("data-text", "Take a note...");
    }

    setTitlePlaceholder() {
        let title = document.getElementById(this.formAttrs['titleInput']);
        title.setAttribute("placeholder", "Take a note...");
    }

    // setBodyInnerText() {
    //     let body = document.getElementById("cn-body-input");

    //     body.setAttribute("data-text", "Take a note...");
    //     body.setAttribute("textcontent", "Take a note...");
    // }

    setInitialFormAttrs() {
        const {formType} = this.props

        if (formType !== 'Edit Form') {
            this.setCreateFormAttrs()
        } else {
            this.setEditFormAttrs()
        }
    }

    setCreateFormAttrs() {
        this.formAttrs['noteFormDiv'] = "cn-div";
        this.formAttrs['formContainer'] = "cn-form-container"
        this.formAttrs['titleInput'] = 'cn-title-input'
        this.formAttrs['bodyInput'] = 'cn-body-input'
        this.formAttrs['closeButton'] = 'cn-close-button'
        this.formAttrs['textAreaClass'] = 'hide'
    }

    setEditFormAttrs() {
        this.formAttrs['noteFormDiv'] = "ef-div";
        this.formAttrs['formContainer'] = "ef-form-container"
        this.formAttrs['titleInput'] = 'ef-title-input'
        this.formAttrs['bodyInput'] = 'ef-body-input'
        this.formAttrs['closeButton'] = 'ef-close-button'
        this.formAttrs['textAreaClass'] = ''
    }

    handleTextArea() {
        return () => {

        }
    }

    render() {
        this.setInitialFormAttrs()
        

        return(
            <div id={this.formAttrs.noteFormDiv}>
                <form onSubmit={this.handleSubmit} className={this.formAttrs.formContainer}>
                    <input
                        type="text"
                        id={this.formAttrs.titleInput}
                        onChange={this.handleChange('title')}
                        onClick={this.handleTitleClick()}
                        value={this.state.title}
                        placeholder="Take a note..."
                        autoComplete="off"
                        />
                    <textarea  
                        onChange={this.handleChange('body')}
                        value={this.state.body}
                        className={this.formAttrs.textAreaClass}
                        id={this.formAttrs.bodyInput}
                        autoComplete="off"
                        onKeyUp={this.handleTextArea()}
                        />
                    {/* <div  
                        contentEditable
                        onInput={this.handleChange('body')}
                        innertext={this.state.body}
                        className={this.formAttrs.textAreaClass}
                        id={this.formAttrs.bodyInput}
                        autoComplete="off"
                        /> */}
                    <input type="submit" value="Close" className={this.formAttrs.textAreaClass} id={this.formAttrs.closeButton}></input>
                </form>
            </div>
        )
    }
}

NoteForm = withRouter(NoteForm)
export default NoteForm