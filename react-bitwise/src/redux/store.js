import { applyMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import { createStore } from 'redux';

import rootReducer from './reducer';

export default function configureStore(preloadedStore) {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const enhancers = [applyMiddleware(...middlewares), monitorReducerEnhancer];

    return createStore(rootReducer, preloadedState, composeWithDevTools(...enhancers));
}