import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <h2 className="nav-bit"> BIT BLOG </h2>
            <ul className="nav">
                <li className="nav"><Link to="/"> Home</Link> </li>
                <li className="nav-bord"><Link to="/AuthorsPage"> Authors</Link></li>
                <li className="nav"><Link to="/AboutPage"> About</Link></li>

            </ul>
        </header>
    )
}

export default Header;