import React from 'react';
import { Link, NavLink } from "react-router-dom"
import metadata from '../../metadata.json';

const SideNav = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to="/" exact={true} className="nav-link"><i className="fa fa-home"
                            aria-hidden="true"></i> Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact={true} className="nav-link"><i className="fa fa-info-circle"
                            aria-hidden="true"></i> About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/data" exact={true} className="nav-link"><i className="fa fa-table"
                            aria-hidden="true"></i> Data Example</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/badPage" exact={true} className="nav-link">
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Bad Link Page
                        </NavLink>
                    </li>
                    <li className="pl-3 mt-5">
                        <span className="text-muted"> {`Build: v${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision} ${metadata.buildTag}`}</span>
                    </li>
                </ul>
            </div>
        </nav >
    );
};

export default SideNav;