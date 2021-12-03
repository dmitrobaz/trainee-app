import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Header, MainWrapper, MyLoader, StarShipsCard } from '../components';

import { getStarShipsResponse } from '../redux/actions/request';

import { imagesStarShips } from '../assets/img';


const StarShip: React.FC = () => {
    const [view, setView] = useState<boolean>(JSON.parse(localStorage.getItem('isStyleListCard') || '{}') || false)

    const dispatch = useDispatch()

    const responseData: any = useSelector(({ request }: any) => request)

    const starShipsStore = responseData.starships


    useEffect(() => {
        localStorage.setItem('isStyleListCard', JSON.stringify(view))
    }, [view])

    useEffect(() => {
        dispatch(getStarShipsResponse.get())
    }, [])

    const clickHandler = () => {
        setView(!view)
    }

    return (
        <>
            <Helmet>
                <title>Star ships</title>
            </Helmet>
            <Header />
            <MainWrapper title='Star ships' onClick={clickHandler} linkArrowLeft='/products'>
                <ul className={view ? 'style-list' : 'style-wrap'}>
                    {starShipsStore.status === 'success'
                        ? starShipsStore.data.results.map((item: any, id: number) =>
                            <StarShipsCard
                                currentCardData={item}
                                img={`${imagesStarShips[Math.floor(Math.random() * imagesStarShips.length)]}`}
                                styleCard={view}
                                key={id}
                            />
                        )
                        : Array(6).fill(0).map((_, index) =>
                            <MyLoader
                                key={index} />)}
                </ul>
            </MainWrapper>
        </>
    );
};

export default StarShip;