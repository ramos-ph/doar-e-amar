import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import SignupPage from './pages/Signup'
import DashboardPage from './pages/Dashboard'
import NewPage from './pages/New'
import MonetaryPage from './pages/Monetary'
import NotFoundPage from './pages/NotFound'
import SigninPage from './pages/Signin'

const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/signin" component={SigninPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/dashboard" component={DashboardPage} />
    <Route path="/new" component={NewPage} />
    <Route path="/monetary" component={MonetaryPage} />

    <Route path="*" component={NotFoundPage} />
  </Switch>
)

export default MainRouter
