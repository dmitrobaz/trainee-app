import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiList, FiSquare, FiArrowLeft } from "react-icons/fi";

import { ItemCard, MyLoader } from '../components';
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

    return (
        <div className='product'>
            <header >
                <h1>Star ships</h1>
                <div>
                    <Link to="/products"><FiArrowLeft /></Link>
                    <button onClick={() => setView(!view)}>{view ? <FiSquare /> : <FiList />}</button>
                </div>
            </header>
            <main className='product-wrapper'>
                <ul className={view ? 'style-list' : 'style-wrap'}>
                    {statusRequst
                        ? itemsDataFromRedux.starships.data.results.map((item: any, id: number) =>
                            <ItemCard
                                typeCard='starships'
                                descr={item}
                                img={`${imagesStarShips[Math.floor(Math.random() * imagesStarShips.length)]}`}
                                key={id}
                                styleCard={view}
                                link='/products'
                            />
                        )
                        : Array(6).fill(0).map((_, index) =>
                            <MyLoader
                                key={index} />)}
                </ul>
            </main>
        </div>
    );
};

export default StarShip;