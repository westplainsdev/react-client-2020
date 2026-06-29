import React from 'react';
import metadata from '../../metadata.json';

const Footer = () => {
    return (
        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
            <footer>
                <span
                    className="text-muted">

                    {`Command Center Build: v${metadata.buildMajor}.
                                             ${metadata.buildMinor}.
                                             ${metadata.buildRevision} 
                                             ${metadata.buildTag}`}
                </span>
            </footer>
        </nav>
    )
}

export default Footer;