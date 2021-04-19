import React from 'react';
import SearchField from 'react-search-field';
import { useHistory } from 'react-router-dom';

function SearchBar() {
    let history = useHistory();

    function onChange() {
        // console.log(this.searchText);    
    }
    
    function onEnter() {
        history.push("/home");
    }
    
    function onSearchClick() {
        // let path = this.searchText;
        let path = '/search';
        console.log(path);    
        history.push(path);
    }

    return (
        <SearchField
            placeholder="Enter any dog breeds"
            onChange={onChange}
            onEnter={onEnter}
            onSearchClick={onSearchClick}
            searchText=""
            classNames="search field"
        />);
}

export default SearchBar;