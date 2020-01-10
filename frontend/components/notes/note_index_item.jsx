import React from 'react';
import { Link } from 'react-router-dom'



const NoteIndexItem = ({note, deleteNote}) => (
    <li id="note-container">
        <Link to={`/notes/${note.id}`}>{note.title} </Link>
        <p>{note.body}</p>
        <button onClick={() => deleteNote(note.id)}>DELETE NOTE</button>
        <br/>
        <div>-------------</div>
    </li>
)

export default NoteIndexItem