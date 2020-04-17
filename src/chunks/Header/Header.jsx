import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header className="apphead">
            <div className="container"><img src="app-logo.png" alt="Tiles App" className="applogo" /></div>
        </header>
    );
};

export default Header;