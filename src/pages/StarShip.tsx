import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiList, FiSquare, FiArrowLeft } from "react-icons/fi";

import { Header, ItemCard, MainWrapper, MyLoader, StarShipsCard } from '../components';
import { axiosStarShipsDataRequest } from '../redux/actions/setItemsToSore';

import { imagesStarShips } from '../assets/img';


interface IStarShipCard {
    itemCount: number,
    itemSubtitle: string,
    link: string,
    img?: string
}


const StarShip: React.FC<IStarShipCard> = ({ link, }) => {
    const [view, setView] = useState<boolean>(JSON.parse(localStorage.getItem('isStyleLisCard') || '{}') || false)
    const [statusRequst, setStatusRequest] = useState<boolean>(false)

    const itemsDataFromRedux: any = useSelector(({ itemDataBase }: any) => itemDataBase)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('isStyleLisCard', JSON.stringify(view))
    }, [view])

    useEffect(() => {
        if (!('data' in itemsDataFromRedux.starships)) {
            Promise.all([
                dispatch(axiosStarShipsDataRequest())
            ]).then(() => setStatusRequest(true))
            return
        }
        setStatusRequest(true)

    }, [])

    const clickHandler = () => {
        setView(!view)
    }

    return (
        <>
            <Header />
            <MainWrapper title='Star ships' onClick={clickHandler} linkArrowLeft='/products'>
                <ul className={view ? 'style-list' : 'style-wrap'}>
                    {statusRequst
                        ? itemsDataFromRedux.starships.data.results.map((item: any, id: number) =>
                            <StarShipsCard
                                descr={item}
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