import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MyLoader, ProductCard, Header, MainWrapper } from '../components';

import { getPeopleResponse, getStarShipsResponse } from '../redux/actions/getResponse';



const Products: React.FC = () => {
    const dispatch = useDispatch()

    const responseStatesFromReduxStore: any = useSelector(({ requestsStates }: any) => requestsStates)

    const peopleStore = {
        data: responseStatesFromReduxStore.people.data,
        pending: responseStatesFromReduxStore.people.pending,
        error: responseStatesFromReduxStore.people.error
    }
    const starShipsStore = {
        data: responseStatesFromReduxStore.starships.data,
        pending: responseStatesFromReduxStore.starships.pending,
        error: responseStatesFromReduxStore.starships.error
    }

    useEffect(() => {
        dispatch(getPeopleResponse.get())
        dispatch(getStarShipsResponse.get())
    }, [])

    return (
        <>
            <Header />
            <MainWrapper title='Products' classContent='product-wrapper-main'>
                <ul>
                    {!peopleStore.pending && !starShipsStore.pending
                        ? <>
                            <ProductCard
                                itemCount={peopleStore.data.count}
                                itemSubtitle='People'
                                link={`/products/people`}
                            />
                            <ProductCard
                                itemCount={starShipsStore.data.count}
                                itemSubtitle='Star ships'
                                link={`/products/starships`}
                            />
                        </>
                        : <MyLoader />
                    }
                </ul>
            </MainWrapper>
        </>
    );
};

export default Products;