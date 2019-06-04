import React from 'react';
import {connect} from 'react-redux';
import {
    selectAllWatchLater,
    removeFromWatchLater
} from "../../modules/addToList";
import ListComponent from '../../component/list/list';
import MovieDetails from '../../component/movieDetails/movieDetails';
import {getMovieDetails, selectMovieDetails, toggleWatchLater} from "../../modules/searchMovies";

class WatchlaterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.visibleButtons = ['dw'];
        this.closeDetails = this.closeDetails.bind(this);
        this.showMovieDetails = this.showMovieDetails.bind(this);
        this.removeFromWatchLater = this.removeFromWatchLater.bind(this);
        this.state = {
            showDetails: false,
        };
    }

    isInArrayById(id, list) {
        return list.find((listItem) => listItem.id === id);
    }

    removeFromWatchLater(id) {
        let item = this.isInArrayById(id, this.props.watchlaterList);
        if (item) {
            this.props.toggleWatchLater(id);
            this.props.removeWatchLater(id);
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
                        loadMore={ this.loadMore }
                        hasMore={ this.hasMore }
                        removeWatchLater={ this.removeFromWatchLater }
                        showMovieDetails={ this.showMovieDetails }
                    /> : <div className="watchlater__empty">
                            <img src="img/hugo-waiting.png"/>
                            <p>Oh Snap! You have nothing to watch later!</p>
                        </div>
                }
                {lightBox( this.state.showDetails )}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        watchlaterList: selectAllWatchLater(state),
        movieDetails: selectMovieDetails(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDetails: (id) => dispatch(getMovieDetails(id)),
        removeWatchLater: (id) => dispatch(removeFromWatchLater(id)),
        toggleWatchLater: (id) => dispatch(toggleWatchLater(id)),
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WatchlaterContainer);