import React from 'react';
import '../styles.css';
import {Link} from 'react-router-dom';

function TitleBar() {
    return(
        <div className="title-bar">
            <Link className="header-title" to="/">Skincare-Finder</Link>
            <div className="header-links-right">
                <Link className="header-link" to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default TitleBar;