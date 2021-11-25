import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { ItemCard } from '../components';

import starship_150 from "../assets/img/starship_150.jpg";
import starship1_150 from "../assets/img/starship1_150.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { axiosStarShipsDataRequest } from '../redux/actions/setItemsToSore';

import { FiList, FiSquare, FiArrowLeft } from "react-icons/fi";

import { MyLoader } from "../components";

interface IStarShipCard {
    itemCount: number,
    itemSubtitle: string,
    link: string,
    img?: string
}


const StarShip: React.FC<IStarShipCard> = ({ link, }) => {
    const [active, setActive] = useState<boolean>(false)
    const [statusRequst, setStatusRequest] = useState<boolean>(false)
    const imgNames = [starship_150, starship1_150]
    const itemsDataFromRedux: any = useSelector(({ itemDataBase }: any) => itemDataBase)
    const dispatch = useDispatch()

    useEffect(() => {
        Promise.all([
            dispatch(axiosStarShipsDataRequest())
        ]).then(() => setStatusRequest(true))
    }, [])

    const isStyleLisCard = () => localStorage.getItem('isStyleLisCard') === 'false' ? false : true

    const clickHandler: () => any = () => {
        localStorage.setItem('isStyleLisCard', `${!isStyleLisCard()}`)
        setActive(!active)
    }

    return (
        <div className='product'>
            <header >
                <h1>Star ships</h1>
                <div>
                    <Link to="/products"><FiArrowLeft /></Link>
                    <button onClick={() => clickHandler()}>{isStyleLisCard() ? <FiSquare /> : <FiList />}</button>
                </div>
            </header>
            <main className={isStyleLisCard() ? 'product-wrapper-list' : 'product-wrapper'}>
                <ul className={isStyleLisCard() ? '' : 'flex-wrap'}>
                    {statusRequst
                        ? itemsDataFromRedux.starships.data.results.map((item: any, id: number) =>
                            <ItemCard
                                typeCard='starships'
                                descr={item}
                                img={`${imgNames[Math.floor(Math.random() * imgNames.length)]}`}
                                key={id}
                                styleCard={isStyleLisCard()}
                                link='/products'
                            />
                        )
                        : Array(6).map((_, index) =>
                            <MyLoader
                                key={index} />)}
                </ul>
            </main>
        </div>
    );
};

export default StarShip;