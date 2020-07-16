import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import ClientsReducer from "./clientsReducer";
import SessionsReducer from "./sessionsReducer";

export default combineReducers({
    user: UserReducer,
    clients: ClientsReducer,
    sessions: SessionsReducer,
});