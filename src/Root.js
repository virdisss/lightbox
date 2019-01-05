import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const Root = ({ children }) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default Root;