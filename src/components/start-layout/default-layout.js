import React from "react"
import Nav from "./nav"
import SideNav from "./side-nav";

const DefaultLayout = ({children}) => (
    <>
        <header>
            <Nav/>
        </header>
        <div className="container-fluid">
            <div className="row">
                <SideNav/>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    {children}
                </main>
            </div>
        </div>
    </>
)

export default DefaultLayout
