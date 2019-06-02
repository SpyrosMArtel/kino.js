export const FETCHING = 'app/searchmovies/FETCHING';
export const SEARCH = 'app/searchmovies/SEARCH';

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
};

export const selectAllMovies = (state) => {
    return state.SearchMovies.movies;
};

export const selectTotalPages = (state) => {
    return state.SearchMovies.totalPages;
};

export const selectCurrentPage = (state) => {
    return state.SearchMovies.page;
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, {
                fetching: action.value,
            });
        case SEARCH:
            let movies = action.value === state.search_keywords ? state.movies : [];
            return Object.assign({}, state, {
                search_keywords: action.value,
                movies: [...movies, ...action.results.movies],
                totalPages: action.results.totalPages,
                page: action.results.page,
                fetching: false,
                error: { on : false, message: "" }
            });
        default:
            return state;
    }
}
export function fetchMovies(keyword, page) {
    return (dispatch, getState, rest_api) => {
        dispatch(fetching());
        return rest_api.findMovie(keyword, page, {'withCredentials' : true}).then((response) => {
            let results = {};
            results.movies = response.data.results.map((item) => {
                item.favorite = false;
                item.watchLater = false;
                return item;
            });
            results.page = response.data.page;
            results.totalPages = response.data.total_pages;
            results.totalResults = response.data.total_results;
            dispatch(search(keyword, results));
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
        results: results,
    }
}