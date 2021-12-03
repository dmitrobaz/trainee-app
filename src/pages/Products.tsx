import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MyLoader, ProductCard, Header, MainWrapper } from '../components';

import { getPeopleResponse, getStarShipsResponse } from '../redux/actions/request';



const Products: React.FC = () => {
    const dispatch = useDispatch()

    const responseData: any = useSelector(({ request }: any) => request)

    const peopleStore = responseData.people
    const starShipsStore = responseData.starships

    console.log(peopleStore, starShipsStore);

    useEffect(() => {
        dispatch(getPeopleResponse.get())
        dispatch(getStarShipsResponse.get())
    }, [])

    return (
        <>
            <Header />
            <MainWrapper title='Products' classContent='product-wrapper-main'>
                <ul>
                    {peopleStore.status === 'success' && starShipsStore.status === 'success'
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