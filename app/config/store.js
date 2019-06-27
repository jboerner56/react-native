/* eslint-disable indent */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSageMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSage from './sagas';


const sagaMiddleware = createSageMiddleware;
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));
sagaMiddleware.run(rootSage);

export default store;
