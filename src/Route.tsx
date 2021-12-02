import React, { useEffect, useState } from 'react';
import { Route as ReactRoute, Switch, Redirect } from 'react-router-dom';

import { Loading } from './components';
import { Registration, Login, Navigation, Products, Peolpe, StarShip, Cart, CardPage } from './pages';



const Route: React.FC = () => {
  const auth: any = localStorage.getItem('auth')
  const isAuth = JSON.parse(auth)

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isAuth)



  // useEffect(() => {
  //   if (auth) {
  //     setIsAuthenticated(true)
  //   }
  // })


  return (
    <Switch>
      <ReactRoute path="/test" component={Loading} exact />
      <ReactRoute path="/cart" component={Cart} />


      <ReactRoute path="/trainee-app/" component={Navigation} exact />
      <ReactRoute path="/trainee-app/login" component={Login} />
      <ReactRoute path="/trainee-app/registration" component={Registration} />
      {isAuthenticated ? <Redirect from='/trainee-app/login' to="/trainee-app/products" /> : <Redirect from='/trainee-app/products' to="/trainee-app/login" />}
      <ReactRoute path="/trainee-app/products" component={Products} exact />
      <ReactRoute path="/trainee-app/products/people" component={Peolpe} exact />
      <ReactRoute path="/trainee-app/products/people/card" component={CardPage} />
      <ReactRoute path="/trainee-app/products/starships" component={StarShip} exact />
      <ReactRoute path="/trainee-app/products/starships/card" component={CardPage} />

    </Switch>
  );
}

export default Route;
