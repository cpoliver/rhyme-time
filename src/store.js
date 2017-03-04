import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSaga from 'redux-saga';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSaga();

import rootReducer from './rootReducer';

export const makeStore = () => createStore(
    rootReducer,
    applyMiddleware(
        loggerMiddleware,
        sagaMiddleware
    )
);
