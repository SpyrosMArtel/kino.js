import React from 'react';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import HeartIcon from '@material-ui/icons/FavoriteOutlined';
import WatchIcon from '@material-ui/icons/WatchLaterOutlined';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';

const ListComponent = (
    {
        items,
        isScroller,
        visibleButtons,
        loadMore,
        hasMore,
        showMovieDetails,
        addToFavorites, addToWatchLater, removeFavorites, removeWatchLater
}) => {
    const hasFavoriteButton         = visibleButtons.some((str) => str === 'fav');
    const hasWatchlaterButton       = visibleButtons.some((str) => str === 'watch');
    const hasRemoveFavoriteButton   = visibleButtons.some((str) => str === 'df');
    const hasRemoveWatchButton      = visibleButtons.some((str) => str === 'dw');
    let listItems = items.map((item, index) => {
        const posterImage = item['poster_path'] || item['image'];
        return(
            <div className="list__item" key={index}>
                <div className="list__item-poster">
                    {posterImage ?
                        <a href="#" onClick={() => showMovieDetails(item.id)}><img src={`https://image.tmdb.org/t/p/original${posterImage}`}/></a>
                        : <a href="#" onClick={() => showMovieDetails(item.id)}><img src='./img/placeholder.png'/></a>}
                </div>
                <div className='list__item-text'><a href="#" onClick={() => showMovieDetails(item.id)}>{item['title']}</a></div>
                <div className='list__item-actions'>
                    {hasFavoriteButton &&
                        <div
                            className={item.favorite ? 'list__items-favourites list__items-favourites--active' : 'list__items-favourites'}>
                            <a href="#" onClick={ () => { item.favorite ? removeFavorites(item.id) : addToFavorites(item)}}><HeartIcon/></a></div>}
                    {hasWatchlaterButton &&
                        <div
                            className={item.watchLater ? 'list__items-watchlater list__items-watchlater--active' : 'list__items-watchlater'}>
                            <a href="#"  onClick={ () => { item.watchLater ? removeWatchLater(item.id) : addToWatchLater(item)}}><WatchIcon/></a></div>}
                    {hasRemoveFavoriteButton &&
                        <div className='list__items-remove'><a href="#"  onClick={ () => {removeFavorites(item.id)}}>
                            <DeleteIcon/></a></div>}
                    {hasRemoveWatchButton &&
                        <div className='list__items-remove'><a href="#"  onClick={ () => {removeWatchLater(item.id)}}>
                            <DeleteIcon/></a></div>}
                </div>
            </div>
        );
    });
    const mainElement = (isScroller) => {
        if (isScroller) {
            return (<InfiniteScroll
                pageStart={1}
                loadMore={ loadMore }
                hasMore={ hasMore }
                loader={<div className="loader" key={0}/>}
                className="list"
                useWindow={false}>
                { listItems }
            </InfiniteScroll>);
        }
        return (<div className="list">{ listItems }</div>);
    };
    return (
        mainElement(isScroller)
    );
};

export default ListComponent;

ListComponent.propTypes = {
    items: PropTypes.array,
    isScroller: PropTypes.bool,
    visibleButtons: PropTypes.array,
    loadMore: PropTypes.func,
    hasMore: PropTypes.bool,
    showMovieDetails: PropTypes.func,
    addToFavorites: PropTypes.func,
    addToWatchLater: PropTypes.func,
    removeFavorites: PropTypes.func,
    removeWatchLater: PropTypes.func,
};