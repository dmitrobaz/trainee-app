import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ItemCard } from './components';
import { Registration, Login, Navigation, Products, Peolpe, StarShip } from './pages';



const App: React.FC = () => {

  const auth = localStorage.getItem('auth')


  useEffect(() => {
    if (auth) {

      setIsAuthenticated(true)

    }
  })

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  return (
    <Switch>
      <Route path="/" component={Navigation} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/registration" component={Registration} exact />
      {/* {isAuthenticated ? <Redirect from='/login' to="/products" /> : <Redirect from='/products' to="/login" />} */}
      <Route path="/products" component={Products} exact />
      <Route path="/products/people" component={Peolpe} />
      <Route path="/products/starships" component={StarShip} />
    </Switch>
  );
}

export default App;
