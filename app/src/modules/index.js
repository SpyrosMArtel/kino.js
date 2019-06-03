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
// history.listen(location => {
//     if (lastLocation !== location.pathname) {
//         lastLocation = location.pathname;
//         store.dispatch(changeLocation(lastLocation));
//     }
// });
//
// const loggerMiddleware = createLogger({}); // initialize logger
//
// export default (history) => combineReducers({
//     router: connectRouter(history),
//     SearchMovies, AddToList
// })
//
// const rest_api = new API( { url: 'https://api.themoviedb.org/3' } );
// const createStoreWithMiddleware = applyMiddleware(
//         thunk.withExtraArgument(rest_api),
//         loggerMiddleware,
//         routerMiddleware(history)
//     )(createStore); // apply logger to redux
//
// const reducers = combineReducers({
//     router: connectRouter(history),
//     SearchMovies, AddToList
// });
//
// const configureStore = (initialState) => createStoreWithMiddleware(connectRouter(history)(reducers), initialState);
// export default configureStore;