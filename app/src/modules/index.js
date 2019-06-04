import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import API from './../utilities/API';
import createHistory from 'history/createMemoryHistory'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers';

export const history = createHistory();
const loggerMiddleware = createLogger({}); // initialize logger
const rest_api = new API( { url: 'https://api.themoviedb.org/3' } );

export default function configureStore(initialState) {
    return createStore(
        createRootReducer(history), // root reducer with router state
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                loggerMiddleware,
                thunk.withExtraArgument(rest_api),
            ),
        ),
    );
}