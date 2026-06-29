import { Link } from "react-router-dom"
import { useAppContext } from "../context/app-context"

 const HeaderNav = () => {
    const { signOut, context } = useAppContext()
    return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/" className="navbar-brand col-sm-3 col-md-2 me-0">Command Center</Link>
        <ul className="nav navbar-nav flex-row me-3">
            <li className="nav-item me-3">
                <Link to="/settings" className="nav-link"><i className="fa fa-cog" aria-hidden="true"></i> Settings</Link>
            </li>
            <li className="nav-item me-3">
                <Link to="/profile" className="nav-link"><i className="fa fa-user" aria-hidden="true"></i> Profile</Link>
            </li>
            <li className="nav-item">
                <button
                    className="nav-link btn btn-link"
                    onClick={() => signOut()}
                    disabled={!context.authenticated}
                >
                    <i className="fa fa-sign-out" aria-hidden="true"></i> Sign out
                </button>
            </li>
        </ul>
    </nav>
    )
 }

export default HeaderNav
