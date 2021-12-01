import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Loading } from './components';
import { Registration, Login, Navigation, Products, Peolpe, StarShip, Test, Cart, CardPage } from './pages';



const App: React.FC = () => {
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
      <Route path="/test" component={Loading} exact />
      <Route path="/cart" component={Cart} />


      <Route path="/" component={Navigation} exact />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      {isAuthenticated ? <Redirect from='/login' to="/products" /> : <Redirect from='/products' to="/login" />}
      <Route path="/products" component={Products} exact />
      <Route path="/products/people" component={Peolpe} exact />
      <Route path="/products/people/card" component={CardPage} />
      <Route path="/products/starships" component={StarShip} exact />
      <Route path="/products/starships/card" component={CardPage} />

    </Switch>
  );
}

export default App;
