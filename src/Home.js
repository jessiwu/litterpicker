import React from 'react';
import logo from './dog_paw.svg';
import './Home.css';
import SearchBar from './searchBar';

function Home() {
    return (
        <div className="Home">
            <h1>TheLitterPicker.com</h1>
            {/* <img src={logo} className="Home-logo" alt="logo" /> */}
            <SearchBar className="SearchBar" />
        </div>
    );
}

export default Home;

