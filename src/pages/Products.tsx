import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MyLoader, ProductCard, Header, MainWrapper } from '../components';
import { axiosPeopleDataRequest, axiosStarShipsDataRequest } from '../redux/actions/setItemsToSore';


const Products: React.FC = () => {
    const [statusRequst, setStatusRequest] = useState<boolean>(false)

    const itemsDataFromRedux: any = useSelector(({ itemDataBase }: any) => itemDataBase)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!('data' in itemsDataFromRedux.people) || !('data' in itemsDataFromRedux.starships)) {
            Promise.all([
                dispatch(axiosPeopleDataRequest()),
                dispatch(axiosStarShipsDataRequest())
            ]).then(() => setStatusRequest(true))
            return
        }
        setStatusRequest(true)
    }, [])

    return (
        <>
            <Header />
            <MainWrapper title='Products' classContent='product-wrapper-main'>
                <ul>
                    {statusRequst
                        ? Object.keys(itemsDataFromRedux).map((item: any, index: number) =>
                            <ProductCard
                                itemCount={itemsDataFromRedux[item].data.count}
                                itemSubtitle={`${item[0].toUpperCase()}${item.slice(1)}`}
                                link={`/products/${item}`}
                                key={index} />)
                        : <MyLoader />
                    }
                </ul>
            </MainWrapper>
        </>
    );
};

export default Products;