import React from 'react';
import { Link } from 'react-router-dom'



class NoteIndexItem extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.showDeleteButton = this.showDeleteButton.bind(this)
        this.hideDeleteButton = this.hideDeleteButton.bind(this)
    }

    handleClick(note) {
        this.props.history.push(`/notes/${note.id}`)
        this.props.openModal('show', note)
    }

    handleDeleteClick(noteId) {
        this.props.deleteNote(noteId)
        this.props.closeModal()
    }

    showDeleteButton() {
            let deleteButton = document.getElementById(`delete-button-${this.props.note.id}`);
            deleteButton.setAttribute('class', 'delete-button')
    }
    hideDeleteButton() {
        let deleteButton = document.getElementById(`delete-button-${this.props.note.id}`);
            deleteButton.setAttribute('class', 'delete-button-hide')
    }

    render() {
        const { note} = this.props
        let titleText = note.title || note.body;
        let bodyClass;
        { note.title === "" ? bodyClass = "hide" : bodyClass = "note-body"}

        return(
            < li id="note-container" 
                onMouseOver={() => this.showDeleteButton()}
                onMouseOut={() => this.hideDeleteButton()}
                onMouseDown={() => this.handleClick(note)}
            >
                <div onClick={() => this.handleClick(note)} id="note-title">{titleText}</div>
                <p id={'note-body'} className={bodyClass}>{note.body}</p>
                <div id='delete-button-container' onClick={() => this.handleDeleteClick(note.id)}>
                    <button
                        
                        className="delete-button-hide"
                        id={`delete-button-${note.id}`}
                    ><i className="far fa-trash-alt"></i></button>
                </div>
                
            </li >
        )
            
    }
    
}




export default NoteIndexItem