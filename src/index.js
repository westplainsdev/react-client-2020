import React from 'react'
import {render} from 'react-dom'
import {Router} from "react-router-dom"
import {createBrowserHistory} from "history"
import Routes from "./components/start-layout/routes"
import AppProvider from "./components/context/app-provider"

import './index.css';

const customHistory = createBrowserHistory()
const target = document.querySelector('#root')

render((
  <AppProvider>
    <Router history={customHistory}>
      <Routes />
    </Router>
  </AppProvider>
), target)
