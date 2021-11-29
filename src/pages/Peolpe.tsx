import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { FiList, FiSquare, FiArrowLeft } from "react-icons/fi";

import { Header, ItemCard, MainWrapper, MyLoader } from "../components";
import { axiosPeopleDataRequest } from '../redux/actions/setItemsToSore';

import { imagesPeople } from '../assets/img';
import PeopleCard from '../components/PeopleCard';



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

    const clickHandler = () => {
        setView(!view)
    }

    return (
        <>
            <Header />
            <MainWrapper title='People' onClick={clickHandler} >
                <ul className={view ? 'style-list' : 'style-wrap'}>
                    {statusRequst
                        ? itemsDataFromRedux.people.data.results.map((item: any, id: number) =>
                            <PeopleCard
                                descr={item}
                                img={`${imagesPeople[Math.floor(Math.random() * imagesPeople.length)]}`}
                                styleCard={view}
                                key={id}
                            />)
                        : Array(6).fill(0).map((_, index) =>
                            <MyLoader
                                key={index} />)
                    }
                </ul>
            </MainWrapper>
        </>
    );
};

export default Peolpe;