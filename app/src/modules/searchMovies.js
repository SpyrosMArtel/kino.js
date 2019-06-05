export const FETCHING = 'app/searchmovies/FETCHING';
export const SEARCH = 'app/searchmovies/SEARCH';
export const TOGGLE_FAVORITE = 'app/searchmovies/TOGGLE_FAVORITE';
export const TOGGLE_WATCHLATER = 'app/searchmovies/TOGGLE_WATCHLATER';
export const SET_MOVIE_DETAILS = 'app/searchmovies/SET_MOVIE_DETAILS';

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

export const selectAllMovies = (state) => {
    return state.SearchMovies.movies;
};

export const selectTotalPages = (state) => {
    return state.SearchMovies.totalPages;
};

export const selectCurrentPage = (state) => {
    return state.SearchMovies.page;
};

export const selectMovieDetails = (state) => {
    return state.SearchMovies.movieDetails;
};

function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues)
}

function updateItemInArray(array, itemId, callback) {
    return array.map((item) => {
        if (item.id !== itemId) {
            return item;
        }
        return callback(item);
    });
}

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
                totalResults: action.results.totalResults,
                page: action.results.page,
                fetching: false,
                error: { on : false, message: "" }
            });
        case SET_MOVIE_DETAILS:
            return updateObject(state, { movieDetails: action.movieDetails });

        case TOGGLE_FAVORITE:
            const newFavoriteItems = updateItemInArray(state.movies, action.id, item => {
                return updateObject(item, { favorite: !item.favorite });
            });

            return updateObject(state, { movies: newFavoriteItems });
        case TOGGLE_WATCHLATER:
            const newWatchLaterItems = updateItemInArray(state.movies, action.id, item => {
                return updateObject(item, { watchLater: !item.watchLater });
            });

            return updateObject(state, { movies: newWatchLaterItems });
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
            if (err.response) {
                //dispatch(error(err.response.data));
                console.log(error.response.data);
            } else if (err.request) {
                //dispatch(error("The server is not responding... Please try again later."));
                console.log(error.request);
            } else {
                //dispatch(error("Something went wrong... Please try again later."));
                console.log('Error', error.message);
            }
        });
    }
}

export function getMovieDetails(id) {
    return (dispatch, getState, rest_api) => new Promise((resolve, reject) => {
        dispatch(fetching());
        rest_api.getVideos(id).then((response) => {
            let results = {};
            results.id = response.data.id || undefined;
            results.image = response.data.poster_path || undefined;
            results.title = response.data.title || undefined;
            results.status = response.data.status || undefined;
            results.images = response.data.images || undefined;
            results.videos = response.data.videos.results || undefined;
            results.runtime = response.data.runtime || undefined;
            results.homepage = response.data.homepage || undefined;
            results.overview = response.data.overview || undefined;
            results.releaseDate = response.data.release_date || undefined;
            results.originalTitle = response.data.original_title || undefined;
            results.originalLanguage = response.data.original_language || undefined;
            results.voteAverage = response.data.vote_average || undefined;
            let movie = getState().SearchMovies.movies.find((item) => item.id === results.id);
            results.favorite = movie.favorite;
            results.watchLater = movie.watchLater;
            dispatch(setMovieDetails(results));
            resolve();
        }).catch((err) => {
            if (err.response) {
                //dispatch(error(err.response.data));
                reject(error.response.data);
            } else if (err.request) {
                //dispatch(error("The server is not responding... Please try again later."));
                reject(error.request);
            } else {
                //dispatch(error("Something went wrong... Please try again later."));
                reject(error.message);
            }
        });
    });
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

export function setMovieDetails(movieDetails) {
    return {
        type: SET_MOVIE_DETAILS,
        movieDetails: movieDetails,
    }
}

export function toggleFavorite(id) {
    return {
        type: TOGGLE_FAVORITE,
        id: id
    }
}

export function toggleWatchLater(id) {
    return {
        type: TOGGLE_WATCHLATER,
        id: id
    }
}