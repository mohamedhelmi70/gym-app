import {LABELS} from './actionTypes';

export const login = token => ({
    type: LABELS.User.SIGN_IN,
    token
})

export const loadingClients = clients => ({
    type: LABELS.Clients.LOADING_CLIENTS,
    clients
})


export const loadingSessions = sessions => ({
    type: LABELS.Sessions.LOADING_SESSIONS,
    sessions
})
