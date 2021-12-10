import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import Route from './Route';

import { setAuthenticated, addDataToCartFromLocalStorage } from './redux/actions/app';


import './style.scss';

import * as utils from './utils';


const App: React.FC = () => {
    const cartDataLocalStorage = utils.jsonParse(localStorage.getItem('cart'))

    const dispatch = useDispatch()
    const isAuthenticated = useSelector(({ app }: any) => app.states.isAuthenticated)

    const auth: any = utils.jsonParse(localStorage.getItem('auth')) ? utils.jsonParse(localStorage.getItem('auth')) : false

    useEffect(() => {
        dispatch(setAuthenticated(auth))
        console.log('cartDataLocalStorage.people.peopleTotalCount', cartDataLocalStorage?.people.peopleTotalCount);

        if (!cartDataLocalStorage?.people.peopleTotalCount && !cartDataLocalStorage?.starships.starShipTotalCount) {
            localStorage.setItem('cart', JSON.stringify({
                people: { peopleTotalCount: 0 },
                starships: { starShipTotalCount: 0 }
            }))
            return
        }
        dispatch(addDataToCartFromLocalStorage(cartDataLocalStorage))
    }, [])

    return (
        <>
            <Helmet>
                <link rel="icon" href="./favicon.ico" />
            </Helmet>
            <Route isAuthenticated={isAuthenticated} />
        </>
    );
};

export default App;