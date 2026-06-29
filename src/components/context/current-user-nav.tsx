import {useAppContext} from "./app-context"

const CurrentUserNav = () => {
  const {context, refresh} = useAppContext()
  return context.user ? (
    <span className="nav-text me-3">Hi {context.user.username}!</span>
  ) : (
    <span className="nav-text me-3">
      {context.busy ? (
        <i className="fa fa-spin fa-sync" />
      ) : (
        <a href="#" onClick={(e) => {e.preventDefault(); refresh()}}>Login</a>
      )}
    </span>
  )
}

export default CurrentUserNav
