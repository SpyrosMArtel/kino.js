import React from 'react';
import HeartIcon from '@material-ui/icons/FavoriteOutlined';
import WatchIcon from '@material-ui/icons/WatchLaterOutlined';
import CloseIcon from '@material-ui/icons/CloseOutlined';

const MovieDetails = (
    {
        item,
        overview,
        mediaUrl,
        mediaType,
        status,
        title,
        runtime,
        homepage,
        releaseDate,
        originalTitle,
        originalLanguage,
        voteAverage,
        addToFavorites,
        addToWatchLater,
        close
    }
) => {
    function minutes2Hours(mins) {
        let hours = Math.floor( mins / 60);
        let minutes = mins % 60;
        if (hours && minutes) return `${hours}h ${minutes}m`;
        return '-'
    }
    function mediaElement(type) {
        if (type === 'image') {
            if (mediaUrl) {
                return (<img className='movie-details__media-image' src={`https://image.tmdb.org/t/p/original${mediaUrl}`}/>);
            }
            return null;
        } else if (type === 'youtube') {
            return (
                <div className="movie-details__video-container">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${mediaUrl}`}
                        frameBorder="0"
                        allow="accelerometer;
                        autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </div>);
        }
        return null;
    }
    return (
        <div className='movie-details'>
            <div className='movie-details__back'>
                <div className='movie-details__close' onClick={() => close() }><CloseIcon /></div>
                <h5>{title}</h5>
                <div className='movie-details__subtitle'>
                    Release date&nbsp;<span>{releaseDate}</span>
                </div>
                {mediaElement(mediaType.toLowerCase())}
                <div className='movie-details__group'>
                    <div className='movie-details__actions'>
                        <div className='movie-details__actions-fav'><a href="#" onClick={() => addToFavorites(item)}><HeartIcon fontSize="inherit"/></a></div>
                        <div className='movie-details__actions-later'><a href="#" onClick={() => addToWatchLater(item)}><WatchIcon fontSize="inherit"/></a></div>
                    </div>
                    {voteAverage && <React.Fragment><b>Rate&nbsp;</b><progress max={10} value={voteAverage}/></React.Fragment>}
                </div>
                <div className='movie-details__group--between'>
                    <div><b>Runtime&nbsp;</b> <span>{minutes2Hours(runtime)}</span></div>
                    <div><b>Language&nbsp;</b><span>{originalLanguage}</span></div>
                </div>
                {homepage && <div className='movie-details__row'>
                    <div className='movie-details__col'>
                        <b>Homepage&nbsp;</b> <span>{homepage}</span>
                    </div>
                </div>}
                <p className='movie-details__overview'>{overview}</p>
                <div className='movie-details__info'>
                    <div className='movie-details__row'>
                        <div className='movie-details__col'>
                            <b>Status&nbsp;</b><span>{status}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MovieDetails;