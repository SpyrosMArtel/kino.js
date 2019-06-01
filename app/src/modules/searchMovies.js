export const FETCHING = 'app/searchmovies/FETCHING';
export const SEARCH = 'app/searchmovies/SEARCH';

const initialState = {
    search_keywords: "",
    fetching: false,
    search_results: [],
    error: {
        on: false,
        message: ""
    },
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, {
                fetching: action.value,
            });
        case SEARCH:
            return Object.assign({}, state, {
                search_keywords: action.value,
                search_results: action.search_results,
                fetching: false,
                error: { on : false, message: "" }
            });
        default:
            return state;
    }
}
export function fetchMovies(keyword) {
    return (dispatch, getState, rest_api) => {
        dispatch(fetching());
        return rest_api.findMovie(keyword, {'withCredentials' : true}).then((response) => {
            dispatch(search(keyword, response.results));
        }).catch((err) => {
            if (error.response) {
                dispatch(error(err.response.data));
            } else if (error.request) {
                dispatch(error("The server is not responding... Please try again later."));
                console.log(error.request);
            } else {
                dispatch(error("Something went wrong... Please try again later."));
                console.log('Error', error.message);
            }
        });
    }
}

export function fetching() {
    return {
        type: FETCHING,
        value: true,
    }
}

export function search(keyword, results) {
    return {
        type: SEARCH,
        value: keyword,
        search_results: results,
    }
}