import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/main'

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
)

export default MainRouter
