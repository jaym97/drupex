import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const middlewares = [thunk];

// Ensuring redux state only logs in development and not production
if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

// Creating overall state management with a rootreducer and a middleware to process actions and dispatch them
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;