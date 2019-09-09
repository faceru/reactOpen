import React from 'react'
import {NavLink} from 'react-router-dom';
import './header.css';
const Header = () => {
    
        return(
            <header>
                <h1>
                    OpenDev
                </h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin">Admin</NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">News</NavLink>
                        </li>
                        
                    </ul>
                </nav>
            </header>
        );
    
}

export default Header;
