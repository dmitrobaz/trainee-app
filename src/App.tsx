import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Registration, Login, Navigation, Products, Peolpe, StarShip } from './pages';



const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const auth = localStorage.getItem('auth')

  useEffect(() => {
    if (auth) {
      setIsAuthenticated(true)
    }
  })


  return (
    <Switch>
      
      <Route path="/" component={Navigation} exact />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      {/* {isAuthenticated ? <Redirect from='/login' to="/products" /> : <Redirect from='/products' to="/login" />} */}
      <Route path="/products" component={Products} exact />
      <Route path="/products/people" component={Peolpe} />
      <Route path="/products/starships" component={StarShip} />
    </Switch>
  );
}

export default App;
