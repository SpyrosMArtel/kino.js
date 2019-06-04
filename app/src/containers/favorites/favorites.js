import React from 'react';
import {connect} from 'react-redux';
import {selectAllFavorites, removeFromFavorites } from "../../modules/addToList";
import ListComponent from '../../component/list/list';
import MovieDetails from '../../component/movieDetails/movieDetails';
import {getMovieDetails, selectMovieDetails, toggleFavorite, toggleWatchLater} from "../../modules/searchMovies";

class FavoritesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.visibleButtons = ['df'];
        this.closeDetails = this.closeDetails.bind(this);
        this.showMovieDetails = this.showMovieDetails.bind(this);
        this.removeFromFavorites = this.removeFromFavorites.bind(this);
        this.state = {
            showDetails: false,
        };
    }

    isInArrayById(id, list) {
        return list.find((listItem) => listItem.id === id);
    }

    removeFromFavorites(id) {
        let item = this.isInArrayById(id, this.props.favoritesList);
        if (item) {
            this.props.toggleFavorite(id);
            this.props.removeFavorite(id);
        }
    }

    showMovieDetails(id) {
        if (this.props.movieDetails && this.props.movieDetails.id === id) {
            this.setState({
                showDetails: true,
            });
            return;
        }
        this.props.getDetails(id).then((results) => {
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
                mediaUrl={this.props.movieDetails.videos[0].key || this.props.movieDetails.image}
                mediaType={this.props.movieDetails.videos[0].site || 'image'}
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
                close={ this.closeDetails }

            />;
        return (
            <React.Fragment>
                {this.props.listItems.length > 0 ?
                    <ListComponent
                        items={this.props.listItems}
                        visibleButtons={ this.visibleButtons }
                        loadMore={ this.props.loadMore }
                        hasMore={ this.props.hasMore }
                        removeFavorites={ this.removeFromFavorites }
                        showMovieDetails={ this.showMovieDetails }
                    /> : <div className="favorites__empty">
                        <img src="img/heart-icons-set-erisbarkova-sketch.png" style={{width:'auto'}}/>
                        <p>Oh Snap! You have no favorites!</p>
                    </div>
                }
                {lightBox( this.state.showDetails )}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        favoritesList: selectAllFavorites(state),
        movieDetails: selectMovieDetails(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDetails: (id) => dispatch(getMovieDetails(id)),
        removeFavorite: (id) => dispatch(removeFromFavorites(id)),
        toggleFavorite: (id) => dispatch(toggleFavorite(id)),
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesContainer);