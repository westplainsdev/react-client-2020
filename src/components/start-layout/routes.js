import React from 'react'
import {Route, Switch} from "react-router-dom"

import NotFoundPage from "../not-found-page"
import IndexPage from "./index-page"
import AboutPage from "./about-page"
import DataPage from "./data-page";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/data" component={DataPage} />
    <Route component={NotFoundPage} />
  </Switch>
)
export default Routes
