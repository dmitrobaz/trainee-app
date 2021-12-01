import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header,  MainWrapper, MyLoader,PeopleCard } from "../components";

import { getPeopleResponse } from '../redux/actions/getResponse';

import { imagesPeople } from '../assets/img';



const Peolpe: React.FC = () => {
    const [view, setView] = useState<boolean>(JSON.parse(localStorage.getItem('isStyleListCard') || '{}') || false)

    const dispatch: any = useDispatch()

    const responseStatesFromReduxStore: any = useSelector(({ requestsStates }: any) => requestsStates)
    const peopleStore = {
        data: responseStatesFromReduxStore.people.data,
        pending: responseStatesFromReduxStore.people.pending,
        error: responseStatesFromReduxStore.people.error
    }

    useEffect(() => {
        localStorage.setItem('isStyleListCard', JSON.stringify(view))
    }, [view])

    useEffect(() => {
        dispatch(getPeopleResponse.get())
    }, [])

    const clickHandler = () => {
        setView(!view)
    }

    return (
        <>
            <Header />
            <MainWrapper title='People' onClick={clickHandler} linkArrowLeft='/products' >
                <ul className={view ? 'style-list' : 'style-wrap'}>
                    {!peopleStore.pending
                        ? peopleStore.data.results.map((item: any, id: number) =>
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