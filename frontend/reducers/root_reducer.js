import { combineReducers } from "redux";
import sessionReducer from "../reducers/session_reducer";
import entitiesReducer from "../reducers/entities_reducer";
import errorsReducer from "../reducers/errors_reducer"
import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    ui: uiReducer
});

export default rootReducer;