import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/main'
import LoginPage from './pages/login'
import NotFoundPage from './pages/notfound'

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />

    <Route path="/signin" element={<LoginPage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default MainRouter
