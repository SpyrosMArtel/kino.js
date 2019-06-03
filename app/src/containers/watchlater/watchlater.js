import React from 'react';
import {connect} from 'react-redux';
import {
    selectAllWatchLater,
    removeFromWatchLater
} from "../../modules/addToList";
import ListComponent from '../../component/list/list';
import {toggleWatchLater} from "../../modules/searchMovies";

class WatchlaterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.visibleButtons = ['dw'];
        this.removeFromWatchLater = this.removeFromWatchLater.bind(this);
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

    render() {
        return (
            <React.Fragment>
                {this.props.listItems.length > 0 ?
                    <ListComponent
                        items={this.props.listItems}
                        visibleButtons={ this.visibleButtons }
                        loadMore={ this.loadMore }
                        hasMore={ this.hasMore }
                        removeWatchLater={ this.removeFromWatchLater }
                    /> : <div className="watchlater__empty">
                            <img src="img/hugo-waiting.png"/>
                            <p>Oh Snap! You have nothing to watch later!</p>
                        </div>
                }
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        watchlaterList: selectAllWatchLater(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeWatchLater: (id) => dispatch(removeFromWatchLater(id)),
        toggleWatchLater: (id) => dispatch(toggleWatchLater(id)),
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WatchlaterContainer);