import React from 'react';
import ListComponent from '../../list/list';
import PropTypes from 'prop-types';

const WatchlaterContainer = ({ listItems, removeWatchLater, showMovieDetails }) => {
    const visibleButtons = ['dw'];
    return(
        <React.Fragment>
            {listItems.length > 0 ?
                <ListComponent
                    items={ listItems }
                    visibleButtons={ visibleButtons }
                    removeWatchLater={ removeWatchLater }
                    showMovieDetails={ showMovieDetails }
                    isScroller={ false }
                /> : <div className="watchlater__empty">
                    <img src="img/hugo-waiting.png"/>
                    <p>Oh Snap! You have nothing to watch later!</p>
                </div>
            }</React.Fragment>
    );
};

export default WatchlaterContainer;

WatchlaterContainer.propTypes = {
    listItems: PropTypes.array,
    removeWatchLater: PropTypes.func,
    showMovieDetails: PropTypes.func,
};