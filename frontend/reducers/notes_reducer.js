import { RECEIVE_ALL_NOTES } from "../actions/note_actions"

const notesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_NOTES:

            return action.notes
    
        default:
            return state;
    }
    
}

export default notesReducer;