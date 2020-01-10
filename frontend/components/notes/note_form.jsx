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

    handleSubmit(e) {
        e.preventDefault();
        const note = Object.assign({}, this.state);
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
            <div>
                {formType === 'Edit Form' ? <Link to='/notes'>Back to Notes</Link> : null}
                <br/>
                <form onSubmit={this.handleSubmit} >
                    <label>Title
                    <input
                        type="text"
                        onChange={this.handleChange('title')}
                        value={this.state.title}
                        />
                    </label>
                    <br />
                    <label>Take a note...
                    <textarea
                        onChange={this.handleChange('body')}
                        value={this.state.body}
                        />
                    </label>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

NoteForm = withRouter(NoteForm)
export default NoteForm