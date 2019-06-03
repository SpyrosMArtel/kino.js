import React from 'react';
import {connect} from 'react-redux';
import {selectAllFavorites, removeFromFavorites } from "../../modules/addToList";
import ListComponent from '../../component/list/list';
import {toggleFavorite, toggleWatchLater} from "../../modules/searchMovies";

class FavoritesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.visibleButtons = ['df'];
        this.removeFromFavorites = this.removeFromFavorites.bind(this);
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

    render() {
        return (
            <React.Fragment>
                    {this.props.listItems.length > 0 ?
                        <ListComponent
                            items={this.props.listItems}
                            visibleButtons={ this.visibleButtons }
                            loadMore={ this.props.loadMore }
                            hasMore={ this.props.hasMore }
                            removeFavorites={ this.removeFromFavorites }
                        /> : <div className="favorites__empty">
                            <img src="img/heart-icons-set-erisbarkova-sketch.png" style={{width:'auto'}}/>
                            <p>Oh Snap! You have no favorites!</p>
                        </div>
                    }
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        favoritesList: selectAllFavorites(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFavorite: (id) => dispatch(removeFromFavorites(id)),
        toggleFavorite: (id) => dispatch(toggleFavorite(id)),
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesContainer);