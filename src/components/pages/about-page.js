import React from "react"
import {Link} from "react-router-dom"
import DefaultLayout from "../start-layout/default-layout"

const AboutPage = () => (
  <DefaultLayout>
    <h1><i className="fa fa-info-circle"  aria-hidden="true"></i> About</h1>
      <p>This application has been built using React. By utilizing React we have been able to create a simple
      yet effective development cycle of creating common and specific components which are then used to be unique
      sections of the application. </p>
    <p>
      <Link to="/">Link to home page</Link>
    </p>
  </DefaultLayout>
)

export default AboutPage
