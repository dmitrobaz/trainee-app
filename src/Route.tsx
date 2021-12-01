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


      <ReactRoute path="/" component={Navigation} exact />
      <ReactRoute path="/login" component={Login} />
      <ReactRoute path="/registration" component={Registration} />
      {isAuthenticated ? <Redirect from='/login' to="/products" /> : <Redirect from='/products' to="/login" />}
      <ReactRoute path="/products" component={Products} exact />
      <ReactRoute path="/products/people" component={Peolpe} exact />
      <ReactRoute path="/products/people/card" component={CardPage} />
      <ReactRoute path="/products/starships" component={StarShip} exact />
      <ReactRoute path="/products/starships/card" component={CardPage} />

    </Switch>
  );
}

export default Route;
