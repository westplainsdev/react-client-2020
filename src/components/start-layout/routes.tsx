import {Route, Routes} from "react-router-dom"

import NotFoundPage from "../not-found-page"
import IndexPage from "../pages/index-page"
import AboutPage from "../pages/about-page"
import DataPage from "../pages/data-page"
import ProfilePage from "../pages/profile-page"
import SettingsPage from "../pages/settings-page"
import UsersPage from "../pages/users-page"

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<IndexPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/data" element={<DataPage/>}/>
    <Route path="/users" element={<UsersPage/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
    <Route path="/settings" element={<SettingsPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
)
export default AppRoutes
