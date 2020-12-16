import React from "react"
import {Link} from "react-router-dom"
import DefaultLayout from "./default-layout"

const AboutPage = () => (
  <DefaultLayout>
    <h1><i className="fa fa-info-circle"  aria-hidden="true"></i> About</h1>
    <p>
      <Link to="/">Link to home page</Link>
    </p>
  </DefaultLayout>
)

export default AboutPage
