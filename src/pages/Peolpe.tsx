import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Header, MainWrapper, MyLoader, PeopleCard } from "../components";

import { getPeopleResponse } from '../redux/actions/request';

import { imagesPeople } from '../assets/img';

const Peolpe: React.FC = () => {
    const [view, setView] = useState<boolean>(JSON.parse(localStorage.getItem('isStyleListCard') || '{}') || false)

    const dispatch: any = useDispatch()
    const responseData: any = useSelector(({ request }: any) => request)

    const peopleStore = responseData.people

    useEffect(() => {
        dispatch(getPeopleResponse.get())
    }, [])

    useEffect(() => {
        localStorage.setItem('isStyleListCard', JSON.stringify(view))
    }, [view])

    const clickHandler = () => {
        setView(!view)
    }

    return (
        <>
            <Helmet>
                <title>People</title>
            </Helmet>
            <Header />
            <MainWrapper title='People' onClick={clickHandler} linkArrowLeft='/products' >
                <ul className={view ? 'style-list' : 'style-wrap'}>
                    {peopleStore.status === 'success'
                        ? peopleStore.data.results.map((item: any, id: number) =>
                            <PeopleCard
                                currentCardData={item}
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