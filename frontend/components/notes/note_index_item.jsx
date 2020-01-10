import React from 'react';
import { Link } from 'react-router-dom'



const NoteIndexItem = ({note, deleteNote, position}) => (
    <li>
        <h4> </h4>
        <Link to={`/notes/${note.id}`}>{note.title} Pos:{position}</Link>
        <p>{note.body}</p>
        <button onClick={() => deleteNote(note.id)}>DELETE NOTE</button>
        <br/>
        <div>-------------</div>
    </li>
)

export default NoteIndexItem