import React from 'react';

import '../style/header.css';
import avatar from '../assets/avata.jpeg';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
                </div>
                <div className="nav-avatar">
                <img src={avatar} alt="avatar" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
