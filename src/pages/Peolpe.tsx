import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import dart_150 from "../assets/img/dart_150.jpg";
import solder_150 from "../assets/img/solder_150.jpeg";
import yoda_150 from "../assets/img/yoda_150.jpg";

import { FiList, FiSquare, FiArrowLeft } from "react-icons/fi";
import { ItemCard } from "../components"


const Peolpe: React.FC = () => {
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem('styleCard', `${active}`)
    }, [active])

    const imgNames = [dart_150, solder_150, yoda_150]

    const itemsDataFromRedux: any = useSelector(({ itemDataBase }: any) => itemDataBase)

    const itemsDataLocalStorage: any = localStorage.getItem('itemData')
    const itemsDataFromLocalStorage: any = JSON.parse(itemsDataLocalStorage)

    const styleCardLS = localStorage.getItem('styleCard')

    return (
        <main className='product'>
            <header >
                <h1>People</h1>
                <nav>
                    <Link to="/products"><FiArrowLeft /></Link>
                    <button onClick={() => setActive(!active)}>{active ? <FiSquare /> : <FiList />}</button>
                </nav>
            </header>

            <section className={active ? 'product-wrapper-list' : 'product-wrapper'}>

                {'people' in itemsDataFromRedux
                    ? itemsDataFromRedux.people.data.results.map((item: any, id: number) =>
                        <ItemCard
                            typeCard='people'
                            descr={item}
                            img={`${imgNames[Math.floor(Math.random() * imgNames.length)]}`}
                            key={id}
                            styleCard={active}

                        />)
                    : itemsDataFromLocalStorage.people.data.results.map((item: any, id: number) =>
                        <ItemCard
                            typeCard='people'
                            descr={item}
                            img={`${imgNames[Math.floor(Math.random() * imgNames.length)]}`}
                            key={id}
                            styleCard={active}

                        />)
                }

            </section>

        </main>
    );
};

export default Peolpe;