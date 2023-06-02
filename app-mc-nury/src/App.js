import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './modules/Menu/Menu';
import Contacto from './modules/Contact/Contact';

import AppContent from './content/app-content';

const ROUTES = {
  home: '/',
  menu: '/menu',
  contacto: '/contacto'
}


class App extends Component {
  render() {
    const APP_CONTENT = AppContent;

    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.menu}>
            <Menu content={APP_CONTENT.menu} /> 
          </Route>
          <Route exact path={ROUTES.contacto}>
            <Contacto content={APP_CONTENT.contact} /> 
          </Route>
          <Route exact path={ROUTES.home}>
            <Home content={APP_CONTENT} /> 
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
