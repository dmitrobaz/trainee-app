import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { MyLoader, ProductCard } from '../components';
import { setItemsToStore, axiosItems } from '../redux/actions/setItemsToSore';
import { useDispatch, useSelector } from 'react-redux';
import { itemDataBase } from "../redux/reduces/itemDataBase";
import store from '../redux/store';

import { Link } from 'react-router-dom';
import { FiList, FiSquare, FiArrowLeft } from "react-icons/fi";


const Products: React.FC = () => {
    const [statusRequst, setStatusRequest] = useState(false)
    
    const dispatch = useDispatch()

    useEffect(() => { dispatch(axiosItems()) }, [])


    const itemsDataFromRedux: any = useSelector(({ itemDataBase }: any) => itemDataBase)

    localStorage.setItem("itemData", JSON.stringify(itemsDataFromRedux))

    return (
        <main className='product'>
            <header >
                <h1>Star ships</h1>
                <nav>
                    <button ><FiSquare /></button>
                </nav>
            </header>
            <section className='product-wrapper-main'>
                {(itemsDataFromRedux.isLoaded.people && itemsDataFromRedux.isLoaded.starships)
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