import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ItemCard } from './components';
import { Registration, Login, Navigation, Products, Card, PeolpeCard, StarShipCard } from './pages';



const App: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route path="/" component={Navigation} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/registration" component={Registration} exact />
          <Route path="/products" component={Products} exact />
          <Route path="/products/people" component={PeolpeCard} exact />
          <Route path="/products/starships" component={StarShipCard} exact />


        </Switch>
      </div>
    </div>
  );
}

export default App;
