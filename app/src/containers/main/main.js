import React from 'react';
import {connect} from 'react-redux';
import SearchComponent from '../../component/search/search';
import ListComponent from '../../component/list/list';
import {
    selectAllMovies,
    selectCurrentPage,
    selectTotalPages,
    fetchMovies,
    toggleFavorite,
    toggleWatchLater
} from '../../modules/searchMovies'
import {
    selectAllFavorites,
    selectAllWatchLater,
    addToFavorites,
    addToWatchLater,
    removeFromFavorites,
    removeFromWatchLater
} from '../../modules/addToList';

class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this._keywords = '';
        this.visibleButtons = 'fw';
        this.hasMore = true;
        this.searchMovie = this.searchMovie.bind(this);
        this.searchInputOnChange = this.searchInputOnChange.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
        this.addToWatchLater = this.addToWatchLater.bind(this);
        this.removeFromFavorites = this.removeFromFavorites.bind(this);
        this.removeFromWatchLater = this.removeFromWatchLater.bind(this);
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

    isInArrayById(id, list) {
        return list.find((listItem) => listItem.id === id);
    }

    addToFavorites(movie) {
        let item = this.isInArrayById(movie.id, this.props.favoritesList);
        if (!item) {
            this.props.toggleFavorite(movie.id);
            this.props.addFavorite(movie);
        }
    }

    addToWatchLater(movie) {
        let item = this.isInArrayById(movie.id, this.props.favoritesList);
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

    render() {
        return (
            <React.Fragment>
                <SearchComponent
                    onSubmit={this.searchMovie}
                    onChange={ this.searchInputOnChange }
                />
                <main id='page-wrapper' role='main'>
                    {this.props.listItems.length > 0 ?
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

                        <h1>Kino.js</h1>
                    }
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
)(MainContainer);