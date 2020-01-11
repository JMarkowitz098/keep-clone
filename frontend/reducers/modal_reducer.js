import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = {}, action) {
  Object.freeze(state)
  switch (action.type) {
    case OPEN_MODAL:
      let newState = Object.assign({}, state)
      newState["modal"] = action.modal;
      newState["note"] = action.openModalItem;
      return newState;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
