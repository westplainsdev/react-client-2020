import React from 'react';
import { NavLink } from "react-router-dom"


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
                        <NavLink to="/404-example" exact={true} className="nav-link">
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> 404 Example
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    );
};

export default SideNav;