// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1>Habit Tracker</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/calendar">Calendar</Link></li> */}
                    <li><Link to="/stats">Stats</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
