import React from "react"
import AppContext from "./app-context"

const CurrentUserNav = () => (
  <AppContext.Consumer>
    {({context, refresh}) => (
      context.user ? (
        <span className="nav-text mr-3">Hi {context?.user?.username}!</span>
      ) : (
        <span className="nav-text mr-3">
          {context.busy ? (
            <i className="fa fa-spin fa-sync" />
          ) : (
            <a href="#" onClick={(e) => {e.preventDefault(); refresh()}}>Login</a>
          )}
        </span>)
    )}
  </AppContext.Consumer>
)

export default CurrentUserNav
