import sessionsState from "../states/sessionsState"
import {LABELS} from '../actions';

const SessionsReducer = (state = sessionsState, action) => {
    switch (action.type) {
        case LABELS.Sessions.LOADING_SESSIONS:
            return {
                ...state,
                sessions: [...state?.sessions, ...action?.sessions],
                isLoading: false,
            };
        default:
            return state;
    }
}

export default SessionsReducer;