import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { FiList, FiSquare, FiArrowLeft } from "react-icons/fi";

import { ItemCard, MyLoader } from "../components";
import { axiosPeopleDataRequest } from '../redux/actions/setItemsToSore';

import { imagesPeople } from '../assets/img';



const Peolpe: React.FC = () => {

    const [view, setView] = useState<boolean>(JSON.parse(localStorage.getItem('isStyleLisCard') || '{}') || false)
    const [statusRequst, setStatusRequest] = useState<boolean>(false)

    const itemsDataFromRedux: any = useSelector(({ itemDataBase }: any) => itemDataBase)
    const dispatch: any = useDispatch()

    useEffect(() => {
        localStorage.setItem('isStyleLisCard', JSON.stringify(view))
    }, [view])

    useEffect(() => {
        if (!('data' in itemsDataFromRedux.people)) {
            Promise.all([
                dispatch(axiosPeopleDataRequest())
            ]).then(() => setStatusRequest(true))
            return
        }
        setStatusRequest(true)

    }, [])

    return (
        <div className='product'>
            <header >
                <h1>People</h1>
                <div>
                    <Link to="/products"><FiArrowLeft /></Link>
                    <button onClick={() => setView(!view)}>{view ? <FiSquare /> : <FiList />}</button>
                </div>
            </header>

            <main className='product-wrapper'>
                <ul className={view ? 'style-list' : 'style-wrap'}>
                    {statusRequst
                        ? itemsDataFromRedux.people.data.results.map((item: any, id: number) =>
                            <ItemCard
                                typeCard='people'
                                descr={item}
                                img={`${imagesPeople[Math.floor(Math.random() * imagesPeople.length)]}`}
                                key={id}
                                styleCard={view}
                                link='/products'

                            />)
                        : Array(6).fill(0).map((_, index) =>
                            <MyLoader
                                key={index} />)
                    }
                </ul>
            </main>

        </div>
    );
};

export default Peolpe;