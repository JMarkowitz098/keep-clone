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
        let linkText = note.title || note.body;
        let bodyClass;
        { note.title === "" ? bodyClass = "hide" : bodyClass = "note-body"}

        return(
            < li id="note-container" >
                <div onClick={() => this.handleClick(note)} id="note-title">   
                    <Link id="show-link" to={`/notes/${note.id}`}>{linkText}</Link>
                </div>
                <p id={'note-body'} className={bodyClass}>{note.body}</p>
                <button
                    onClick={() => deleteNote(note.id)}
                    id="delete-button"
                >DN</button>
            </li >
        )
            
    }
    
}




export default NoteIndexItem