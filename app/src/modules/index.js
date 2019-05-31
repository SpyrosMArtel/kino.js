import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger({}); // initialize logger

const createStoreWithMiddleware = applyMiddleware(thunk, loggerMiddleware)(createStore); // apply logger to redux

const reducers = combineReducers({});

const configureStore = (initialState) => createStoreWithMiddleware(reducers, initialState);
export default configureStore;