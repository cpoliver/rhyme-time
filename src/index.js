import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { makeStore } from './store';

import './index.css';

const store = makeStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
