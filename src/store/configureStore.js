import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from './middlewares/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import RootReducer from './reducers';

const configureStore = ( preloadedState ) => {
    const middlewares = [logger, thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(RootReducer, preloadedState, composedEnhancers);

    return store;
}

export default configureStore;