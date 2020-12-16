import React from 'react'
import { Link } from "react-router-dom"

const NotFoundPage = () => (
  <div className="error-container">
    <h1><i className="fa fa-exclamation-triangle text-danger"></i> Ought oh - Page not found</h1>
    <p className="lead">Hey man, sorry. That page you're looking for, well it doesn't exist.
        Give it a <Link to="/">try from here</Link></p>
  </div>
)

export default NotFoundPage
