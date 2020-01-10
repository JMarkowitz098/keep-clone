import * as PostApiUtil from "../util/note_api_util"

export const RECEIVE_NOTE = 'RECEIVE_NOTE'
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES'
export const REMOVE_NOTE = 'REMOVE_NOTE'

const receiveNote = (note) => ({
    type: RECEIVE_NOTE,
    note
})
   


export const receiveAllNotes = (notes) => {

    return {
    type: RECEIVE_ALL_NOTES,
    notes}
}

const removeNote = (noteId) => ({
    type: REMOVE_NOTE,
    noteId
})

export const fetchNotes = () => dispatch => (
    PostApiUtil.fetchNotes()
        .then(notes => dispatch(receiveAllNotes(notes)))
);

export const fetchNote = noteId => dispatch => {
    return PostApiUtil.fetchNote(noteId)
        .then(note => dispatch(receiveNote(note)))
}

export const createNote = note => dispatch => (
    PostApiUtil.createNote(note)
        .then(note => 
            dispatch(receiveNote(note))
            
            )
)

export const updateNote = note => dispatch => (
    PostApiUtil.updateNote(note)
        .then(note => dispatch(receiveNote(note)))
)

export const deleteNote = noteId => dispatch => {
    return PostApiUtil.deleteNote(noteId)
        .then(note => dispatch(removeNote(note.id)))
}