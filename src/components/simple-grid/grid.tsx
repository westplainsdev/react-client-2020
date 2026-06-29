import {useState, useEffect} from "react"
import {fetchJson} from "../../lib/fetch-json"

interface PlaceholderPost {
  userId: number
  id: number
  title: string
  body: string
}

const DataGrid = () => {
  const [posts, setPosts] = useState<PlaceholderPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      setLoading(true)
      setError(null)
      const result = await fetchJson<PlaceholderPost[]>(
        "https://jsonplaceholder.typicode.com/posts?_limit=20"
      )
      if (cancelled) return
      if (result.error) {
        setError(result.errorMessage || "Failed to load posts")
      } else if (result.ok && result.json) {
        setPosts(result.json)
      } else {
        setError(`Request failed with status ${result.status}`)
      }
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [])

  if (loading) {
    return <p><i className="fa fa-spin fa-sync"></i> Loading posts...</p>
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        <i className="fa fa-exclamation-triangle"></i> {error}
      </div>
    )
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.userId}</td>
              <td>{p.title}</td>
              <td className="text-truncate" style={{maxWidth: "300px"}}>{p.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataGrid
