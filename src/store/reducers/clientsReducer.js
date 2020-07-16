import clientsState from "../states/clientsState"
import {LABELS} from '../actions';

const ClientsReducer = (state = clientsState, action) => {
    switch (action.type) {
        case LABELS.Clients.LOADING_CLIENTS:
            return {
                ...state,
                clients: [...state?.clients, ...action?.clients],
                isLoading: false,
            };
        default:
            return state;
    }
}

export default ClientsReducer;