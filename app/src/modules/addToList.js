export const ADD_TO_FAVORITES = 'app/addToList/ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'app/addToList/REMOVE_FROM_FAVORITES';
export const ADD_TO_WATCH_LATER = 'app/addToList/ADD_TO_WATCH_LATER';
export const REMOVE_FROM_WATCH_LATER = 'app/addToList/REMOVE_FROM_WATCH_LATER';

const initialState = {
    favorites: [],
    watchLater: [],
};

export const selectAllFavorites = (state) => {
    return state.AddToList.favorites;
};

export const selectAllWatchLater = (state) => {
    return state.AddToList.watchLater;
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return Object.assign({}, state,
                {
                    favorites: [...state.favorites, action.value ]
                });
        case ADD_TO_WATCH_LATER:
            return Object.assign({}, state,
                {
                    watchLater: [...state.watchLater, action.value ]
                });
        case REMOVE_FROM_FAVORITES:
            return Object.assign({}, state,
                {
                    favorites: state.favorites.filter(movie => {
                        return movie.id !== action.id
                    })
                });

        case REMOVE_FROM_WATCH_LATER:
            return Object.assign({}, state,
                {
                    watchLater: state.watchLater.filter(movie => {
                        return movie.id !== action.id
                    })
                });

        default:
            return state;
    }
}

export function addToFavorites(movie) {
    return {
        type: ADD_TO_FAVORITES,
        value: movie,
    };
}

export function addToWatchLater(movie) {
    return {
        type: ADD_TO_WATCH_LATER,
        value: movie,
    };
}

export function removeFromFavorites(id) {
    return {
        type: REMOVE_FROM_FAVORITES,
        id: id,
    };
}

export function removeFromWatchLater(id) {
    return {
        type: REMOVE_FROM_WATCH_LATER,
        id: id,
    };
}