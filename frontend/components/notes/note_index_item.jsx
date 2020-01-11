import React from 'react';
import { Link } from 'react-router-dom'



class NoteIndexItem extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(note) {
        this.props.openModal('show', note)
    }

    render() {
        const { note, deleteNote} = this.props

        return(
            < li id="note-container" >
                <div onClick={() => this.handleClick(note)} id="note-title">   
                    <Link to={`/notes/${note.id}`}>{note.title} </Link>
                </div>
                <p id="note-body" >{note.body}</p>
                <button
                    onClick={() => deleteNote(note.id)}
                    id="delete-button"
                >DN</button>
            </li >
        )
            
    }
    
}




export default NoteIndexItem