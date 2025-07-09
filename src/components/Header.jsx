import React from "react";
import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            header logo
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;