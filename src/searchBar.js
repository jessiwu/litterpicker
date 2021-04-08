import React from 'react';

function SearchBar() {
    return (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search by dog breeds!</span>
        </label>
        <input className='SearchField'
            type="text"
            id="header-search"
            placeholder="Search by dog breeds!"
            name="s"
        />
        <button type="submit">Search</button>
    </form>);
}

export default SearchBar;