import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import SearchMovies from './searchMovies';
import AddToList from './addToList';

export default (history) => combineReducers({
    router: connectRouter(history),
    SearchMovies, AddToList
});