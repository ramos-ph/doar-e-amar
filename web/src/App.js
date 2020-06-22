import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import './assets/css/common.css'

import Header from './components/Header'
import Routes from './routes'

const App = () => (
  <Router>
    <Header />

    <Routes />
  </Router>
)

export default App
