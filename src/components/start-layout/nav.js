import React from "react"
import { Link } from "react-router-dom"

 const HeaderNav = () => (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0">Command Center</Link>
        <ul className="nav navbar-nav flex-row mr-3">
            <li className="nav-item mr-3">
                <a className="nav-link" href="/"><i className="fa fa-cog" aria-hidden="true"></i> Settings</a>
            </li>
            <li className="nav-item mr-3">
                <a className="nav-link" href="/"><i className="fa fa-user" aria-hidden="true"></i> Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign out</a>
            </li>
        </ul>
    </nav>


)

export default HeaderNav
