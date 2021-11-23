import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Registration, Login, Navigation } from './pages';



const App: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route path="/" component={Navigation} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/registration" component={Registration} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;
