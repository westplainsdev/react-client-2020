import DefaultLayout from "../start-layout/default-layout"
import { useAppContext } from "../context/app-context"

const ProfilePage = () => {
  const { context, refresh } = useAppContext()

  return (
    <DefaultLayout>
      <h1><i className="fa fa-user" aria-hidden="true"></i> Profile</h1>

      {context.authenticated && context.user ? (
        <div className="row">
          <div className="col-md-6">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th scope="row" className="w-25">Username</th>
                  <td>{context.user.username}</td>
                </tr>
                <tr>
                  <th scope="row">Account ID</th>
                  <td>{context.account?.accountId}</td>
                </tr>
                <tr>
                  <th scope="row">Authenticated</th>
                  <td><span className="badge bg-success">Yes</span></td>
                </tr>
                <tr>
                  <th scope="row">Background Data</th>
                  <td>{context.backgroundUpdateData}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="alert alert-info">
          <p>You are not currently signed in.</p>
          <button
            className="btn btn-primary"
            onClick={() => refresh()}
            disabled={context.busy}
          >
            {context.busy ? (
              <span><i className="fa fa-spin fa-sync"></i> Signing in...</span>
            ) : (
              <span><i className="fa fa-sign-in"></i> Login</span>
            )}
          </button>
        </div>
      )}
    </DefaultLayout>
  )
}

export default ProfilePage
