// Reducer to be tested
import AddToList, {
    addToFavorites,
    addToWatchLater,
    removeFromWatchLater,
    removeFromFavorites,
    ADD_TO_FAVORITES,
    ADD_TO_WATCH_LATER,
    REMOVE_FROM_FAVORITES,
    REMOVE_FROM_WATCH_LATER
} from '../app/src/modules/addToList';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mockAPI} from './fakeAPI';

const mockStore = configureMockStore([thunk.withExtraArgument(mockAPI)]);

const initialState = {
    favorites: [],
    watchLater: [],
};

describe('It will test the initial state and adding removing movies from the favs and watch later', () => {
    let store;
    let newState;

    beforeEach(() => {
        jest.mock('axios');
        store = mockStore(initialState);
        newState = Object.assign({}, initialState);

    });

    it('returns the initial state correctly', () => {
        const action = {type: 'dummy_action'};
        expect(AddToList(undefined, action)).toEqual(initialState);
    });

    test('handles if ADD_TO_FAVORITES action and reducer  is as expected', () => {
        const expectedActions = [{type: ADD_TO_FAVORITES, value: {id:123, title: "hello"}}];

        newState.favorites = [
            {id:123, title: "hello"},
        ];

        store.dispatch(addToFavorites({id:123, title: "hello"}));
        expect(store.getActions()).toEqual(expectedActions);

        expect(AddToList(undefined, expectedActions[0])).toEqual(newState);
    });

    test('handles if ADD_TO_WATCH_LATER action and reducer  is as expected', () => {
        const expectedActions = [{type: ADD_TO_WATCH_LATER, value: {id:123, title: "hello"}}];

        newState.watchLater = [
            {id:123, title: "hello"},
        ];

        store.dispatch(addToWatchLater({id:123, title: "hello"}));
        expect(store.getActions()).toEqual(expectedActions);

        expect(AddToList(undefined, expectedActions[0])).toEqual(newState);
    });

    test('handles if REMOVE_FROM_FAVORITES action and reducer is as expected', () => {
        const expectedActions = [{type: REMOVE_FROM_FAVORITES, id: 123}];

        store.dispatch(removeFromFavorites(123));
        expect(store.getActions()).toEqual(expectedActions);

        expect(AddToList(undefined, expectedActions[0])).toEqual(newState);
    });

    test('handles if REMOVE_FROM_WATCH_LATER action and reducer is as expected', () => {
        const expectedActions = [{type: REMOVE_FROM_WATCH_LATER, id: 123}];

        store.dispatch(removeFromWatchLater(123));
        expect(store.getActions()).toEqual(expectedActions);

        expect(AddToList(undefined, expectedActions[0])).toEqual(newState);
    });
});