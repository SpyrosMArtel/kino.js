import React from 'react';
import SearchIcon from '@material-ui/icons/SearchSharp';
import HeartIcon from '@material-ui/icons/FavoriteOutlined';
import WatchIcon from '@material-ui/icons/WatchLaterOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBackOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PropTypes from 'prop-types';


const SearchComponent = ( { onSubmit, onChange, routeChange, routeHasChanged, path, title} ) => {
    function backButtonOrSearch(routeChanged) {
        return routeChanged ? (
            <React.Fragment>
                <ArrowBackIcon className="search__mobile" onClick={()=>routeChange('/', '')}/>
                <HomeIcon className="search__tabletplus" onClick={()=>routeChange('/', '')}/>
                <h5>{title}</h5>
            </React.Fragment>
        ) :
            (<form className="search__form" onSubmit={(e) => onSubmit(e) }>
                <input type="text" placeholder="Find a movie..." className="search__input" onChange={(e) => onChange(e.target.value)}/>
                <SearchIcon className="search__icon" />
            </form>)
    }

    return (
        <nav className="navbar" role="navigation">
            <div />
            <div className={`search ${path}`}>
                { backButtonOrSearch(routeHasChanged) }
            </div>
            <div className={`navbar-menu ${path}`}>
                <div className="navbar-menu__favorites"><HeartIcon onClick={() => path === '' && routeChange('/favorites', 'Favorites')}/></div>
                <div className="navbar-menu__watchlater"><WatchIcon  onClick={()=> path === '' && routeChange('/watchlater', 'Watch Later')}/></div>
            </div>
            <div/>
        </nav>
    );
};
export default SearchComponent;

SearchComponent.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    routeChange: PropTypes.func,
    routeHasChanged: PropTypes.bool,
    path: PropTypes.string
};