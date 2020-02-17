import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Header from './components/header'
import Footer from './components/footer'

import Routes from './routes'

const App = () => (
  <>
    <Header />

    <Router>
      <Routes />
    </Router>

    <Footer />
  </>
)

export default App
