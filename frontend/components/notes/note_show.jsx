import React from 'react'
import { Link } from 'react-router-dom'

class NoteShow extends React.Component {

    componentDidMount() {
        this.props.fetchNote(this.props.match.params.id)
    }


    render() {

        const {note} = this.props
        return(
            <div>
                <h1>NOTE SHOW PAGE</h1>
                <h2>{note.title}</h2>
                <Link to='/notes'>Back to Notes</Link>
            </div>
        )
    }
}

export default NoteShow