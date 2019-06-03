import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { push, goBack } from 'connected-react-router'
import FavoriteContainer from '../favorites/favorites';
import WatchlaterContainer from '../watchlater/watchlater';
import SearchComponent from '../../component/search/search';
import {
    fetchMovies, selectAllMovies, selectCurrentPage, selectTotalPages, toggleFavorite,
    toggleWatchLater
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
            }
        };

        this.loadMore = this.loadMore.bind(this);
        this.searchMovie = this.searchMovie.bind(this);
        this.routeChanged = this.routeChanged.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
        this.addToWatchLater = this.addToWatchLater.bind(this);
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

    addToFavorites(movie) {
        let item = this.isInArrayById(movie.id, this.props.favoritesList);
        if (!item) {
            this.props.toggleFavorite(movie.id);
            this.props.addFavorite(movie);
        }
    }

    addToWatchLater(movie) {
        let item = this.isInArrayById(movie.id, this.props.watchLaterList);
        if (!item) {
            this.props.toggleWatchLater(movie.id);
            this.props.addWatchLater(movie);
        }
    }

    removeFromFavorites(id) {
        let item = this.isInArrayById(id, this.props.favoritesList);
        if (item) {
            this.props.toggleFavorite(id);
            this.props.removeFavorite(id);
        }
    }

    removeFromWatchLater(id) {
        let item = this.isInArrayById(id, this.props.watchLaterList);
        if (item) {
            this.props.toggleWatchLater(id);
            this.props.removeWatchLater(id);
        }
    }

    routeChanged(newRoute) {
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
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <SearchComponent
                    onSubmit={this.searchMovie}
                    onChange={ this.searchInputOnChange }
                    routeChange={ this.routeChanged }
                    routeHasChanged={ this.state.route.changed }
                    path={this.state.route.path }
                />
                <main id='page-wrapper' role='main'>
                    <Switch>
                        <Route exact path="/favorites" render={() =>
                            <FavoriteContainer
                                listItems={ this.props.favoritesList }
                                loadMore={ this.loadMore }
                                hasMore={ this.hasMore }
                            /> } />
                        <Route exact path="/watchlater" render={() =>
                            <WatchlaterContainer
                                listItems={ this.props.watchLaterList }
                                loadMore={ this.loadMore }
                                hasMore={ this.hasMore }
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
                                />
                            :
                            (<div className="home__empty"><h1>kino.js</h1></div>)

                        } />
                    </Switch>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changePage: (route) => dispatch(push(route)),
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