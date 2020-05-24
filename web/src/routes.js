import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import SignupPage from './pages/Signup'
import DashboardPage from './pages/Dashboard'
import NotFoundPage from './pages/NotFound'

const MainRouter = () => (
  <Switch>
    <Route path="/" exact component={MainPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/dashboard" component={DashboardPage} />

    <Route path="*" component={NotFoundPage} />
  </Switch>
)

export default MainRouter
