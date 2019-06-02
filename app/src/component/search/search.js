import React from 'react';
import SearchIcon from '@material-ui/icons/SearchSharp';
import HeartIcon from '@material-ui/icons/FavoriteOutlined';
import WatchIcon from '@material-ui/icons/WatchLaterOutlined';

const SearchComponent = ( { onSubmit, onChange } ) => {
    return (
        <nav className="navbar" role="navigation">
            <div />
            <div className="search">
                <form className="search__form" onSubmit={(e) => onSubmit(e) }>
                    <input type="text" placeholder="Find a movie..." className="search__input" onChange={(e) => onChange(e.target.value)}/>
                    <SearchIcon className="search__icon" />
                </form>
            </div>
            <div className="navbar-menu">
                <div className="navbar-menu__favorites"><HeartIcon/></div>
                <div className="navbar-menu__watchlater"><WatchIcon/></div>
            </div>
            <div/>
        </nav>
    );
};
export default SearchComponent;