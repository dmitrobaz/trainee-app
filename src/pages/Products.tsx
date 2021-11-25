import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { MyLoader, ProductCard } from '../components';
import { axiosPeopleDataRequest, axiosStarShipsDataRequest } from '../redux/actions/setItemsToSore';
import { useDispatch, useSelector } from 'react-redux';

import { FiSquare } from "react-icons/fi";


const Products: React.FC = () => {
    const [statusRequst, setStatusRequest] = useState<boolean>(false)

    const dispatch = useDispatch()

    useEffect(() => {

        Promise.all([
            dispatch(axiosPeopleDataRequest()),
            dispatch(axiosStarShipsDataRequest())
        ]).then(() => setStatusRequest(true))

    }, [])


    const itemsDataFromRedux: any = useSelector(({ itemDataBase }: any) => itemDataBase)


    return (
        <div className='product'>
            <header>
                <h1>Products</h1>
            </header>

            <main className='product-wrapper-main'>
                <ul>
                    {statusRequst
                        ? Object.keys(itemsDataFromRedux).map((item: any, index: number) =>
                            <ProductCard
                                itemCount={itemsDataFromRedux[item].data.count}
                                itemSubtitle={`${item[0].toUpperCase()}${item.slice(1)}`}
                                link={`/products/${item}`}
                                key={index} />)
                        : Array(2).map((_, index) =>
                            <MyLoader
                                key={index} />)
                    }
                </ul>
            </main>
        </div>
    );
};

export default Products;