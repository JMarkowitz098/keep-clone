import React from 'react';
import { Link } from 'react-router-dom'



const NoteIndexItem = ({note, deleteNote}) => (
    <li id="note-container">
        <div id="note-title"><Link to={`/notes/${note.id}`}>{note.title} </Link></div>
        <p id="note-body">{note.body}</p>
        <button 
            onClick={() => deleteNote(note.id)}
            id="delete-button"
        >DN</button>
    </li>
)

export default NoteIndexItem