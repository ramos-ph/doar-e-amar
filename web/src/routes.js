import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import SignupPage from './pages/Signup'
import DashboardPage from './pages/Dashboard'
import DonationPage from './pages/Donation'
import NewPage from './pages/New'
import NotFoundPage from './pages/NotFound'

const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/dashboard" component={DashboardPage} />
    <Route path="/donations/:donation_id" component={DonationPage} />
    <Route path="/new" component={NewPage} />

    <Route path="*" component={NotFoundPage} />
  </Switch>
)

export default MainRouter
