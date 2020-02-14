import React from "react"
import {Link, NavLink} from "react-router-dom"

const HeaderNav = () => (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0">Command Center</Link>

        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
                <a className="nav-link" href="/">Sign out</a>
            </li>
        </ul>
    </nav>
)

export default HeaderNav
