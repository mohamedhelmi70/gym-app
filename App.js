import React from 'react';
import {Provider} from 'react-redux';

import RootApp from './src/app/app';
import configureStore from './src/store/configureStore';

const store = configureStore();

export default function App () {
    return (
        <Provider store={store}>
            <RootApp />
        </Provider>
    )
};
