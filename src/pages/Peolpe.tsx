import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import dart_150 from "../assets/img/dart_150.jpg";
import solder_150 from "../assets/img/solder_150.jpeg";
import yoda_150 from "../assets/img/yoda_150.jpg";

import { FiList, FiSquare, FiArrowLeft } from "react-icons/fi";

import { ItemCard, MyLoader } from "../components";
import { axiosPeopleDataRequest } from '../redux/actions/setItemsToSore';



const Peolpe: React.FC = () => {
    // const [view. setView] = useState(localStorage.getItem('isStyleLisCard') || 'qwe')


    const [active, setActive] = useState<boolean>(false)
    const [statusRequst, setStatusRequest] = useState<boolean>(false)

    const itemsDataFromRedux: any = useSelector(({ itemDataBase }: any) => itemDataBase)
    const dispatch: any = useDispatch()

    const imgNames = [dart_150, solder_150, yoda_150]

    useEffect(() => {
        Promise.all([
            dispatch(axiosPeopleDataRequest())
        ]).then(() => setStatusRequest(true))

        // dispatch(axiosPeopleDataRequest()).then((response:any) =>console.log(response))

    }, [])

    const isStyleLisCard = () => localStorage.getItem('isStyleLisCard') === 'false' ? false : true

    const clickHandler: () => any = () => {
        localStorage.setItem('isStyleLisCard', `${!isStyleLisCard()}`)
        setActive(!active)
    }



    return (
        <div className='product'>
            <header >
                <h1>People</h1>
                <div>
                    <Link to="/products"><FiArrowLeft /></Link>
                    <button onClick={() => clickHandler()}>{isStyleLisCard() ? <FiSquare /> : <FiList />}</button>
                </div>
            </header>

            <main className={isStyleLisCard() ? 'product-wrapper-list' : 'product-wrapper'}>
                <ul className={isStyleLisCard() ? '' : 'flex-wrap'}>
                    {statusRequst
                        ? itemsDataFromRedux.people.data.results.map((item: any, id: number) =>
                            <ItemCard
                                typeCard='people'
                                descr={item}
                                img={`${imgNames[Math.floor(Math.random() * imgNames.length)]}`}
                                key={id}
                                styleCard={isStyleLisCard()}
                                link='/products'

                            />)
                        : Array(6).map((_, index) =>
                            <MyLoader
                                key={index} />)
                    }
                </ul>
            </main>

        </div>
    );
};

export default Peolpe;