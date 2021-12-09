import React from 'react';
import { Route as ReactRoute, Switch, Redirect } from 'react-router-dom';

import { Loading } from './components';

import { Registration, Login, Navigation, Products, Peolpe, StarShip, Cart, CardPage, Test } from './pages';

interface IRouteProps {
  isAuthenticated: boolean
}

const Route: React.FC<IRouteProps> = ({ isAuthenticated }) => {

  return (
    <Switch>
      {/* {isAuthenticated ? <Redirect from='/login' to="/products" /> : <Redirect from='/products' to="/login" />} */}
      <ReactRoute path="/test" component={Test} exact />
      <ReactRoute path="/cart" component={Cart} />
      <ReactRoute path="/" component={Products} exact />
      <ReactRoute path="/login" component={Login} />
      <ReactRoute path="/registration" component={Registration} />
      <ReactRoute path="/products" component={Products} exact />
      <ReactRoute path="/products/people" component={Peolpe} exact />
      <ReactRoute path="/products/people/card" component={CardPage} />
      <ReactRoute path="/products/starships" component={StarShip} exact />
      <ReactRoute path="/products/starships/card" component={CardPage} />
    </Switch>
  );
}

export default Route;
