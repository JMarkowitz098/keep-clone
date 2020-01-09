import * as PostApiUtil from "../util/note_api_util"

export const RECEIVE_NOTE = 'RECEIVE_NOTE'
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES'
export const DELETE_NOTE = 'DELETE_NOTE'

const receiveNote = (note) => ({
    type: RECEIVE_NOTE,
    note
})

export const receiveAllNotes = (notes) => {

    return {
    type: RECEIVE_ALL_NOTES,
    notes}
}

const deleteNotes = (noteId) => ({
    type: DELETE_NOTE,
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