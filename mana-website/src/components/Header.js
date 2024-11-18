import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            {/* Logo */}
            <div className="logo">
                <h1>MANA</h1>
            </div>

            {/* Navigation Bar */}
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#learn">Learn</a></li>
                    <li><a href="#share">Share</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
