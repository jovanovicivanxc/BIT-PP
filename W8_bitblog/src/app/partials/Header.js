import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <h1> BIT BLOG </h1>
            <ul>
                <li><Link to="/"> Home</Link> </li>
                <li><Link to="/AuthorsPage"> Authors</Link></li>
                <li><Link to="/AboutPage"> About</Link></li>
                
            </ul>
        </header>
    )
}

export default Header;