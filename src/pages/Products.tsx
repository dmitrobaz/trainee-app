import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { MyLoader, ProductCard } from '../components';
import { axiosPeopleDataRequest, axiosStarShipsDataRequest } from '../redux/actions/setItemsToSore';
import { useDispatch, useSelector } from 'react-redux';

import { FiSquare} from "react-icons/fi";


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
        <main className='product'>
            <header >
                <h1>Star ships</h1>
                <nav>
                    <button ><FiSquare /></button>
                </nav>
            </header>
            <section className='product-wrapper-main'>
                {statusRequst
                    ? (<div style={{ all: "inherit" }}>
                        <ProductCard itemCount={itemsDataFromRedux.people.data.count} itemSubtitle={'People'} link="/products/people" />
                        <ProductCard itemCount={itemsDataFromRedux.starships.data.count} itemSubtitle={'Star ships'} link="/products/starships" />
                    </div>)
                    : Array(2).fill(0).map((_, index) => <MyLoader key={index} />)}

            </section>

        </main>
    );
};

export default Products;