import React from 'react'
import {Route, Switch} from "react-router-dom"

import NotFoundPage from "../not-found-page"
import IndexPage from "../pages/index-page"
import AboutPage from "../pages/about-page"
import DataPage from "../pages/data-page";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/data" component={DataPage} />
    <Route component={NotFoundPage} />
  </Switch>
)
export default Routes
