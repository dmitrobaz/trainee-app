import React from 'react';

import { Link } from 'react-router-dom';

import { ItemCard } from '../components';

interface IStarShipCard {
    itemCount: number,
    itemSubtitle: string,
    link: string,
    img?: string
}


const StarShipCard: React.FC<IStarShipCard> = ({ link, }) => {

    const starShipsDataLocalStorage: any = localStorage.getItem('starShips')
    const starShipsData = JSON.parse(starShipsDataLocalStorage)

    return (
        <main className='product'>
            <h1 className="product-title">People</h1>
            <section className='product-wrapper'>

                {starShipsData.results.map((item: any) => <ItemCard descr={item.name} />)}

            </section>

        </main>
    );
};

export default StarShipCard;