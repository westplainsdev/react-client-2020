import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import Routes from "./components/start-layout/routes"
import AppProvider from "./components/context/app-provider"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const target = document.querySelector('#root')
const root = createRoot(target)

root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
)
