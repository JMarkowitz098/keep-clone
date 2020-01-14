import React from 'react';

class NoteIndexItem extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.showDeleteButton = this.showDeleteButton.bind(this)
        this.hideDeleteButton = this.hideDeleteButton.bind(this)
    }

    handleClick(note,e) {
        if (!this.isDeleteClick(e.target.className)){
            // let newNote = e.currentTarget
            // newNote.setAttribute('class', 'open-note')
            
            this.props.history.push(`/notes/${note.id}`)
            this.props.openModal('show', note)

        }
    }

    handleDeleteClick(noteId) {
        this.props.deleteNote(noteId)
    }

    isDeleteClick(className) {
        if (className === "delete-button" 
        || className === 'delete-button-hide' 
        || className === "far fa-trash-alt") {
            return true;
        } else {
            return false;
        }
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
                    onMouseDown={(e) => this.handleClick(note, e)}
                >
                    <div id="note-title">{titleText}</div>
                    <p id={'note-body'} className={bodyClass}>{note.body}</p>
                    <div id='delete-button-container' onClick={() => this.handleDeleteClick(note.id)}>
                        <button
                            className="delete-button-hide"
                            id={`delete-button-${note.id}`}
                        ><i className="far fa-trash-alt"></i></button>
                    </div>
                    {/* <div id="animate">ANIMATE ME</div> */}
                </li >
            
        )
            
    }
    
}




export default NoteIndexItem