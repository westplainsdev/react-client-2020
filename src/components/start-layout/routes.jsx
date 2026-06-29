import React from 'react'
import {Route, Routes} from "react-router-dom"

import NotFoundPage from "../not-found-page"
import IndexPage from "../pages/index-page"
import AboutPage from "../pages/about-page"
import DataPage from "../pages/data-page";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<IndexPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/data" element={<DataPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
)
export default AppRoutes
