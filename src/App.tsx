import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { addPeopleToCart, addStarShipsToCart } from './redux/actions/app';
import Route from './Route';

import './style.scss';


const App: React.FC = ({ children }) => {
    const dispatch = useDispatch()

    const parseDataFromLS = (localStorage: any) => JSON.parse(localStorage)


    const auth: any = parseDataFromLS(localStorage.getItem('auth')) ? parseDataFromLS(localStorage.getItem('auth')) : false
    const starShipsCardDataLS = parseDataFromLS(localStorage.getItem('starShipCardsData'))
    const peopleCardsDataLS = parseDataFromLS(localStorage.getItem('peopleCardsData'))

    // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const isAuthenticated = useSelector(({ app }: any) => app.states.isAuthenticated)


    // useEffect(() => {
    //     peopleCardsDataLS && peopleCardsDataLS.forEach((item: any) => dispatch(addPeopleToCart(item)))
    //     starShipsCardDataLS && starShipsCardDataLS.forEach((item: any) => dispatch(addStarShipsToCart(item)))
    // }, [])
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