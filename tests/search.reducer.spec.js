// Reducer to be tested
import SearchMovies from '../app/src/modules/searchMovies';
import { SEARCH, FETCHING, fetchMovies } from '../app/src/modules/searchMovies';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fakeAPI } from './fakeAPI';

const mockStore = configureMockStore([thunk.withExtraArgument(fakeAPI)]);

describe('It will test the initial state and the FETCH and SEARCH actions', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    test('is correct', () => {
        const action = { type: 'dummy_action' };
        const initialState = {
            search_keywords: '',
            fetching: false,
            search_results: [],
            error: {
                on: false,
                message: ''
            }
        };

        expect(SearchMovies(undefined, action)).toEqual(initialState);
    });

    test('should handle SEARCH', () => {
        const action = {
            type: SEARCH,
            value: 'Trailer 1',
            search_results: [
                {
                    'id': '533ec654c3a36854480003eb',
                    'iso_639_1': 'en',
                    'iso_3166_1': 'US',
                    'key': 'SUXWAEX2jlg',
                    'name': 'Trailer 1',
                    'site': 'YouTube',
                    'size': 720,
                    'type': 'Trailer'
                }
            ]
        };
        const newState = {
            search_keywords: 'Trailer 1',
            search_results: [
                    {
                        'id': '533ec654c3a36854480003eb',
                        'iso_639_1': 'en',
                        'iso_3166_1': 'US',
                        'key': 'SUXWAEX2jlg',
                        'name': 'Trailer 1',
                        'site': 'YouTube',
                        'size': 720,
                        'type': 'Trailer'
                    }
                ],
            fetching: false,
            error: { on : false, message: '' }
        };
        expect(SearchMovies(undefined, action)).toEqual(newState);
    });

    test('should handle FETCHING', () => {
        const action = {
            type: FETCHING,
            value: true,
        };
        const newState = {
            search_keywords: '',
            search_results: [],
            fetching: true,
            error: { on : false, message: '' }
        };
        expect(SearchMovies(undefined, action)).toEqual(newState);
    });

    it('creates FETCHING and SEARCH actions when getting the data from the API', () => {
        fetchMock.getOnce('/todos', {});
        const expectedActions = [
            { type: FETCHING, 'value': true },
            { type: SEARCH, 'search_results':
                    [
                        {
                            'id': '533ec654c3a36854480003eb',
                            'iso_3166_1': 'US',
                            'iso_639_1': 'en',
                            'key': 'SUXWAEX2jlg',
                            'name': 'Trailer 1',
                            'site': 'YouTube',
                            'size': 720,
                            'type': 'Trailer'
                        }
                        ],
                'value': 'test keywords'
            }
        ];
        const store = mockStore({});

        return store.dispatch(fetchMovies('test keywords')).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
});