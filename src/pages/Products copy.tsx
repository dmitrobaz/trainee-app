import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MyLoader, ProductCard } from '../components';
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
        <div className='product'>
            <header>
                <h1>Products</h1>
            </header>

            <main className='product-wrapper-main'>
                <ul>
                    {false
                        ? Object.keys(itemsDataFromRedux).map((item: any, index: number) =>
                            <ProductCard
                                itemCount={itemsDataFromRedux[item].data.count}
                                itemSubtitle={`${item[0].toUpperCase()}${item.slice(1)}`}
                                link={`/products/${item}`}
                                key={index} />)
                        : Array(2).fill(0).map((_, index) =>
                            <MyLoader
                                key={index} />)
                    }
                </ul>
            </main>
        </div>
    );
};

export default Products;