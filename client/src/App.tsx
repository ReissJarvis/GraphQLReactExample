import React from 'react';
import './App.css';
import { BaseLayout } from './components/layout/base-layout';
import { DicePage } from './components/dice-page';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { HomePage } from './components/home-page';

function App() {
  return (
      <Router>
          <BaseLayout>
              <Switch>
                  <Route path="/dice">
                      <DicePage />
                  </Route>
                  <Route path="/">
                      <HomePage />
                  </Route>
              </Switch>
          </BaseLayout>
      </Router>
  )
}

export default App;
