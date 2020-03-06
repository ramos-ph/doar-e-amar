import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/main'
import LoginPage from './pages/login'

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />

    <Route path="/signin" element={<LoginPage />} />
  </Routes>
)

export default MainRouter
