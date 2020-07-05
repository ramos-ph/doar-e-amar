import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import './assets/css/common.css'

import Routes from './routes'

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default App
