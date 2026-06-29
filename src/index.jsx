import React from 'react'
import {createRoot} from 'react-dom/client'
import {Router} from "react-router-dom"
import {createBrowserHistory} from "history"
import Routes from "./components/start-layout/routes"
import AppProvider from "./components/context/app-provider"

import './index.css';

const customHistory = createBrowserHistory()
const target = document.querySelector('#root')
const root = createRoot(target)

root.render(
  <React.StrictMode>
    <AppProvider>
      <Router history={customHistory}>
        <Routes />
      </Router>
    </AppProvider>
  </React.StrictMode>
)
