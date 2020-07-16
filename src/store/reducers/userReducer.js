import userState from '../states/userState';
import { LABELS } from '../actions';

const UserReducer = (state = userState, action) => {
    switch (action.type) {
        case LABELS.User.RESTORE_TOKEN:
            return {
                ...state,
                userToken: action.token,
                isLoading: false,
            };
        case LABELS.User.SIGN_IN:
            return {
                ...state,
                isSignout: false,
                userToken: action.token,
            };
        case LABELS.User.SIGN_OUT:
            return {
                ...state,
                isSignout: true,
                userToken: null,
            };
        default:
            return state;
    }
}

export default UserReducer;