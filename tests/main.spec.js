import HomeContainer from '../app/src/containers/home/home';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import { history } from '../app/src/modules';
import createRootReducer from '../app/src/modules/reducers';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const initialState = {
    search_keywords: "",
    fetching: false,
    movies: [],
    totalPages: 0,
    page: 1,
    totalResults: 0,
    error: {
        on: false,
        message: ""
    },
    movieDetails: {},
};

const mockStore = configureMockStore([routerMiddleware(history), thunk]);

describe('<HomeContainer />', function () {
    let store;
    beforeEach(() => {
        store = mockStore(createRootReducer(history), {
            SearchMovies: initialState,
            AddToList: {
                favorites: [],
                watchLater: [],
            }
        });
    });

    it('Renders without hiccups', function () {
        shallow(<HomeContainer store={store}/>);
    });

    it('Contains the H1 header with "Kino.js" as text', function() {
        const wrapper = mount(<Provider store={store}><ConnectedRouter history={history}><HomeContainer/></ConnectedRouter></Provider>);
        const h1Header =  <h1>kino.js</h1>;
        expect(wrapper.contains(h1Header)).toEqual(true);
    });
});