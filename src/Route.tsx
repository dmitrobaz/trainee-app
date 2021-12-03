import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route as ReactRoute, Switch, Redirect } from 'react-router-dom';

import { Loading } from './components';
import { Registration, Login, Navigation, Products, Peolpe, StarShip, Cart, CardPage } from './pages';
import { addPeopleToCart } from './redux/actions/app/addPeopleToCart';



const Route: React.FC = () => {
  const dispatch = useDispatch()

  const parseDataFromLS = (localStorage: any) => JSON.parse(localStorage)
  const auth: any = parseDataFromLS(localStorage.getItem('auth'))
  const starShipsCount = parseDataFromLS(localStorage.getItem('starShipCardsData'))
  const peopleCardsData = parseDataFromLS(localStorage.getItem('peopleCardsData'))

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(auth)


  useEffect(() => {
    peopleCardsData && peopleCardsData.forEach((item: any) => dispatch(addPeopleToCart(item)))
    starShipsCount && starShipsCount.forEach((item: any) => dispatch(addPeopleToCart(item)))
  }, [])


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
