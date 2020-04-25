import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import NotFoundPage from './pages/NotFound'

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default MainRouter
