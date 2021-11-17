import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Registration, Login } from './pages';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/registration" component={Registration} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;
