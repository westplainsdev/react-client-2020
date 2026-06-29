import {useState, useEffect} from "react"
import DefaultLayout from "../start-layout/default-layout"
import {fetchJson} from "../../lib/fetch-json"

interface PlaceholderUser {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
  }
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
}

const UsersPage = () => {
  const [users, setUsers] = useState<PlaceholderUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      setLoading(true)
      setError(null)
      const result = await fetchJson<PlaceholderUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      )
      if (cancelled) return
      if (result.error) {
        setError(result.errorMessage || "Failed to load users")
      } else if (result.ok && result.json) {
        setUsers(result.json)
      } else {
        setError(`Request failed with status ${result.status}`)
      }
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [])

  return (
    <DefaultLayout>
      <h1><i className="fa fa-users" aria-hidden="true"></i> Users</h1>
      <p className="text-muted">
        Data fetched live from{" "}
        <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">
          JSONPlaceholder
        </a>{" "}
        using the <code>fetchJson</code> helper.
      </p>

      {loading && (
        <p><i className="fa fa-spin fa-sync"></i> Loading users...</p>
      )}

      {error && (
        <div className="alert alert-danger">
          <i className="fa fa-exclamation-triangle"></i> {error}
        </div>
      )}

      {!loading && !error && users.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-sm table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.address.city}</td>
                  <td>{u.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DefaultLayout>
  )
}

export default UsersPage
