import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { push, goBack } from 'connected-react-router'
import FavoriteContainer from '../../component/favorites/favorites';
import WatchlaterContainer from '../../component/favorites/watchlater/watchlater';
import SearchComponent from '../../component/search/search';
import MovieDetails from '../../component/movieDetails/movieDetails';

import {
    fetchMovies, selectAllMovies, selectCurrentPage, selectTotalPages, toggleFavorite,
    toggleWatchLater, selectMovieDetails, getMovieDetails
} from "../../modules/searchMovies";
import {
    addToFavorites, addToWatchLater, removeFromFavorites, removeFromWatchLater, selectAllFavorites,
    selectAllWatchLater
} from "../../modules/addToList";
import ListComponent from '../../component/list/list';

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        this._keywords = '';
        this.visibleButtons = ['fav','watch'];
        this.hasMore = true;
        this.state = {
            route: {
                changed: false,
                path: ''
            },
            title: '',
            showDetails: false,
            movieDetailsUpdate: false,
        };

        this.loadMore = this.loadMore.bind(this);
        this.searchMovie = this.searchMovie.bind(this);
        this.closeDetails = this.closeDetails.bind(this);
        this.routeChanged = this.routeChanged.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
        this.addToWatchLater = this.addToWatchLater.bind(this);
        this.showMovieDetails = this.showMovieDetails.bind(this);
        this.removeFromFavorites = this.removeFromFavorites.bind(this);
        this.searchInputOnChange = this.searchInputOnChange.bind(this);
        this.removeFromWatchLater = this.removeFromWatchLater.bind(this);
    }

    isInArrayById(id, list) {
        return list.find((listItem) => listItem.id === id);
    }

    searchMovie(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.getMovies(this._keywords, this._page);
        this.hasMore = true;
    }

    searchInputOnChange(keywords) {
        this._keywords = keywords;
    }

    loadMore(page) {
        if (page <= this.props.totalPages) {
            this.props.getMovies(this._keywords, page);
        } else {
            this.hasMore = false;
        }
    }

    resetMovieDetails(what) {
        if (this.props.movieDetails) {
            if (!this.props.movieDetails[what]) {
                this.props.movieDetails[what] = true;
            } else {
                this.props.movieDetails[what] = false;
            }
            this.setState({movieDetailsUpdate: true});
        }
    }

    addToFavorites(movie) {
        let item = this.isInArrayById(movie.id, this.props.favoritesList);
        if (!item) {
            this.props.toggleFavorite(movie.id);
            this.props.addFavorite(movie);
        }
        this.resetMovieDetails("favorite");

    }

    addToWatchLater(movie) {
        let item = this.isInArrayById(movie.id, this.props.watchLaterList);
        if (!item) {
            this.props.toggleWatchLater(movie.id);
            this.props.addWatchLater(movie);
        }
        this.resetMovieDetails("watchLater");
    }

    removeFromFavorites(id) {
        let item = this.isInArrayById(id, this.props.favoritesList);
        if (item) {
            this.props.toggleFavorite(id);
            this.props.removeFavorite(id);
        }
        this.resetMovieDetails("favorite");
    }

    removeFromWatchLater(id) {
        let item = this.isInArrayById(id, this.props.watchLaterList);
        if (item) {
            this.props.toggleWatchLater(id);
            this.props.removeWatchLater(id);
        }
        this.resetMovieDetails("watchLater");
    }

    routeChanged(newRoute, title) {
        let path = newRoute.split('/')[1];
        if (newRoute !== '/') {
            this.props.changePage(newRoute);
        } else {
            this.props.goBack();
        }
        this.setState({
            route:{
                changed: newRoute !== '/',
                path: path,
            },
            title: title
        });
    }

    showMovieDetails(id) {
        if (this.props.movieDetails && this.props.movieDetails.id === id) {
            this.setState({
                showDetails: true,
            });
            return;
        }
        this.props.getDetails(id).then(() => {
            this.setState({
                showDetails: true,
            });
        });
    }

    closeDetails() {
        this.setState({
            showDetails: false,
        });
    }

    render() {
        const lightBox = (showDetails) => showDetails &&
            <MovieDetails
                item={this.props.movieDetails}
                overview={this.props.movieDetails.overview}
                mediaUrl={(this.props.movieDetails.videos.length > 0 && this.props.movieDetails.videos[0].key) || this.props.movieDetails.image}
                mediaType={(this.props.movieDetails.videos.length > 0 && this.props.movieDetails.videos[0].site) || 'image'}
                status={this.props.movieDetails.status}
                title={this.props.movieDetails.title}
                runtime={this.props.movieDetails.runtime}
                homepage={this.props.movieDetails.homepage}
                releaseDate={this.props.movieDetails.releaseDate}
                originalTitle={this.props.movieDetails.originalTitle}
                originalLanguage={this.props.movieDetails.originalLanguage}
                voteAverage={this.props.movieDetails.voteAverage}
                addToFavorites={ this.addToFavorites }
                addToWatchLater={ this.addToWatchLater }
                removeFavorites={ this.removeFromFavorites }
                removeWatchLater={ this.removeFromWatchLater }
                close={ this.closeDetails }
                update={ this.state.movieDetailsUpdate }

            />;
        return (
            <React.Fragment>
                <SearchComponent
                    onSubmit={this.searchMovie}
                    onChange={ this.searchInputOnChange }
                    routeChange={ this.routeChanged }
                    routeHasChanged={ this.state.route.changed }
                    path={this.state.route.path }
                    title={this.state.title}
                />
                <main id='page-wrapper' role='main'>
                    <Switch>
                        <Route exact path="/favorites" render={() =>
                            <FavoriteContainer
                                listItems={ this.props.favoritesList }
                                removeFavorites={ this.removeFromFavorites }
                                showMovieDetails={ this.showMovieDetails }
                            /> } />
                        <Route exact path="/watchlater" render={() =>
                            <WatchlaterContainer
                                listItems={ this.props.watchLaterList }
                                removeWatchLater={ this.removeFromWatchLater }
                                showMovieDetails={ this.showMovieDetails }
                            />}
                        />
                        <Route exact path="/" render={() => this.props.listItems.length > 0 ?
                            <ListComponent
                                items={this.props.listItems}
                                visibleButtons={ this.visibleButtons }
                                loadMore={ this.loadMore }
                                hasMore={ this.hasMore }
                                addToFavorites={ this.addToFavorites }
                                addToWatchLater={ this.addToWatchLater }
                                removeFavorites={ this.removeFromFavorites }
                                removeWatchLater={ this.removeFromWatchLater }
                                showMovieDetails={ this.showMovieDetails }
                                isScroller={true}
                                />
                            :
                            (<div className="home__empty"><h1>kino.js</h1></div>)
                        }/>
                    </Switch>
                    {lightBox( this.state.showDetails )}
                </main>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        listItems: selectAllMovies(state),
        favoritesList: selectAllFavorites(state),
        watchLaterList: selectAllWatchLater(state),
        currentPage: selectCurrentPage(state),
        totalPages: selectTotalPages(state),
        movieDetails: selectMovieDetails(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changePage: (route) => dispatch(push(route)),
        getDetails: (id) => dispatch(getMovieDetails(id)),
        goBack: () => dispatch(goBack()),
        getMovies: (keyword, page) => dispatch(fetchMovies(keyword, page)),
        addFavorite: (movie) => dispatch(addToFavorites(movie)),
        addWatchLater: (movie) => dispatch(addToWatchLater(movie)),
        removeFavorite: (id) => dispatch(removeFromFavorites(id)),
        removeWatchLater: (id) => dispatch(removeFromWatchLater(id)),
        toggleFavorite: (id) => dispatch(toggleFavorite(id)),
        toggleWatchLater: (id) => dispatch(toggleWatchLater(id)),
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);