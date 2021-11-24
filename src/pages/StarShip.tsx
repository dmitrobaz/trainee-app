import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { ItemCard } from '../components';

import starship_150 from "../assets/img/starship_150.jpg";
import starship1_150 from "../assets/img/starship1_150.jpg";
import { useSelector } from 'react-redux';

import { FiList, FiSquare, FiArrowLeft } from "react-icons/fi";


interface IStarShipCard {
    itemCount: number,
    itemSubtitle: string,
    link: string,
    img?: string
}


const StarShip: React.FC<IStarShipCard> = ({ link, }) => {
    const [active, setActive] = useState<boolean>(false)
    console.log(active);

    const imgNames = [starship_150, starship1_150]

    const itemsDataFromRedux: any = useSelector(({ itemDataBase }: any) => itemDataBase)

    const itemsDataLocalStorage: any = localStorage.getItem('itemData')
    const itemsDataFromLocalStorage: any = JSON.parse(itemsDataLocalStorage)

    return (
        <main className='product'>
            <header >
                <h1>Star ships</h1>
                <nav>
                    <Link to="/products"><FiArrowLeft /></Link>
                    <button onClick={() => setActive(!active)}>{active ? <FiSquare /> : <FiList />}</button>
                </nav>
            </header>
            <section className={active ? 'product-wrapper-list' : 'product-wrapper'}>

                {'starships' in itemsDataFromRedux
                    ? itemsDataFromRedux.starships.data.results.map((item: any, id: number) =>
                        <ItemCard
                            typeCard='starships'
                            descr={item}
                            img={`${imgNames[Math.floor(Math.random() * imgNames.length)]}`}
                            key={id}
                            styleCard={active}

                        />
                    )
                    : itemsDataFromLocalStorage.starships.data.results.map((item: any, id: number) =>
                        <ItemCard
                            typeCard='starships'
                            descr={item}
                            img={`${imgNames[Math.floor(Math.random() * imgNames.length)]}`}
                            key={id}
                            styleCard={active}
                        />
                    )}
            </section>
        </main>
    );
};

export default StarShip;