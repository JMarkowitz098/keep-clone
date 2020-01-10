import React from 'react'
import { Link, withRouter } from 'react-router-dom';

class NoteForm extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     title: '',
        //     body: ''
        // }
        this.state = this.props.note || {title: '', body: ''}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount() {
    //     if (this.props.match.params.id) {
    //         let note = this.props.fetchNote(this.props.match.params.id)
    //         debugger
    //         this.setState(note)
    //     }
    // }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleTitleClick() {
        return (e) => {
            let body = document.getElementById("body-input")
            let button = document.getElementById("close-button")
            body.setAttribute("class", "none")
            button.setAttribute("class", "none")
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const note = Object.assign({}, this.state);

        let body = document.getElementById("body-input")
        let button = document.getElementById("close-button")
        body.setAttribute("class", "hide")
        button.setAttribute("class", "hide")


        this.props
            .action(note)
        this.setState({
            title: '',
            body: ''
        })
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
                        />
                    <textarea
                        onChange={this.handleChange('body')}
                        value={this.state.body}
                        className="hide"
                        id="body-input"
                        />
                    <input type="submit" value="Close" className="hide" id="close-button"></input>
                </form>
            </div>
        )
    }
}

NoteForm = withRouter(NoteForm)
export default NoteForm