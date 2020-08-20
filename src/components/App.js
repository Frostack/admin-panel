import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthScreen from './AuthScreen/AuthScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <AuthScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
