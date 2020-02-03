import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import MainPage from './pages/main';

export default function Routes() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  );
}