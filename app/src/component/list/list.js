import React from 'react';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import HeartIcon from '@material-ui/icons/FavoriteOutlined';
import WatchIcon from '@material-ui/icons/WatchLaterOutlined';
import InfiniteScroll from 'react-infinite-scroller';
import {removeFromWatchLater} from "../../modules/addToList";

const ListComponent = (
    {
        items,
        visibleButtons,
        loadMore,
        hasMore,
        addToFavorites, addToWatchLater, removeFavorites, removeWatchLater
}) => {
    const hasFavoriteButton         = visibleButtons.some((str) => str === 'fav');
    const hasWatchlaterButton       = visibleButtons.some((str) => str === 'watch');
    const hasRemoveFavoriteButton   = visibleButtons.some((str) => str === 'df');
    const hasRemoveWatchButton      = visibleButtons.some((str) => str === 'dw');

    let listItems = items.map((item, index) => {
        return(
            <div className="list__item" key={index}>
                <div className="list__item-poster">
                    {item['poster_path'] ?
                        <img src={`https://image.tmdb.org/t/p/original${item['poster_path']}`}/>
                    : <img src='./img/placeholder.png'/>}
                </div>
                <div className='list__item-text'>{item['title']}</div>
                <div className='list__item-actions'>
                    {hasFavoriteButton &&
                        <div
                            className={item.favorite ? 'list__items-favourites list__items-favourites--active' : 'list__items-favourites'}>
                            <a href="#" onClick={ () => { item.favorite ? removeFavorites(item.id) : addToFavorites(item);
                        }}><HeartIcon/></a></div>}
                    {hasWatchlaterButton &&
                        <div
                            className={item.watchLater ? 'list__items-watchlater list__items-watchlater--active' : 'list__items-watchlater'}>
                            <a href="#"  onClick={ () => { item.watchLater ? removeWatchLater(item.id) : addToWatchLater(item);
                        }}><WatchIcon/></a></div>}
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

    return (
            <InfiniteScroll
                pageStart={1}
                loadMore={ loadMore }
                hasMore={ hasMore }
                loader={<div className="loader" key={0}/>}
                className="list"
                useWindow={false}>
                { listItems }
            </InfiniteScroll>
    );
};

export default ListComponent;