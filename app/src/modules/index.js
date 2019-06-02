import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import API from './../utilities/API';
import SearchMovies from './searchMovies';
import AddToList from './addToList';

const loggerMiddleware = createLogger({}); // initialize logger
const rest_api = new API( { url: 'https://api.themoviedb.org/3' } );

const createStoreWithMiddleware = applyMiddleware(thunk.withExtraArgument(rest_api), loggerMiddleware)(createStore); // apply logger to redux

const reducers = combineReducers({
    SearchMovies, AddToList
});

const configureStore = (initialState) => createStoreWithMiddleware(reducers, initialState);
export default configureStore;