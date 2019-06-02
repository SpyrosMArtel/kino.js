import React from 'react';
import {connect} from 'react-redux';
import SearchComponent from '../../component/search/search';
import ListComponent from '../../component/list/list';
import { selectAllMovies, selectCurrentPage, selectTotalPages, fetchMovies } from '../../modules/searchMovies'

class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this._keywords = '';
        this.hasMore = true;
        this.searchMovie = this.searchMovie.bind(this);
        this.searchInputOnChange = this.searchInputOnChange.bind(this);
        this.loadMore = this.loadMore.bind(this);
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

    render() {
        return (
            <React.Fragment>
                <SearchComponent onSubmit={this.searchMovie} onChange={ this.searchInputOnChange }/>
                <main id='page-wrapper' role='main'>
                    {this.props.listItems.length > 0 ?
                        <ListComponent
                            items={this.props.listItems}
                            visibleButtons='fw'
                            loadMore={ this.loadMore }
                            hasMore={ this.hasMore }
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
        currentPage: selectCurrentPage(state),
        totalPages: selectTotalPages(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovies: (keyword, page) => dispatch(fetchMovies(keyword, page)),
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);