import React from 'react';
import ListComponent from '../list/list';
import PropTypes from 'prop-types';

const FavoritesContainer = ({ listItems, removeFavorites, showMovieDetails }) => {
    const visibleButtons = ['df'];
    return(
        <React.Fragment>
            {listItems.length > 0 ?
                <ListComponent
                    items={ listItems }
                    visibleButtons={ visibleButtons }
                    removeFavorites={ removeFavorites }
                    showMovieDetails={ showMovieDetails }
                    isScroller={ false }
                /> : <div className="favorites__empty">
                    <img src="img/heart-icons-set-erisbarkova-sketch.png" style={{width:'auto'}}/>
                    <p>Oh Snap! You have no favorites!</p>
                </div>
            }</React.Fragment>
    );
};

export default FavoritesContainer;

FavoritesContainer.propTypes = {
    listItems: PropTypes.array,
    removeFavorites: PropTypes.func,
    showMovieDetails: PropTypes.func,
};