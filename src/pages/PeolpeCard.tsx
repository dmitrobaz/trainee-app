import React from 'react';

import { ItemCard } from "../components"

const PeolpeCard = () => {

    const peopleDataLocalStorage: any = localStorage.getItem('peopleData')
    const peopleData = JSON.parse(peopleDataLocalStorage)

    console.log(peopleData.results);

    return (
        <main className='product'>
            <h1 className="product-title">People</h1>
            <section className='product-wrapper'>

                {peopleData.results.map((item: any) => <ItemCard descr={item.name} />)}

            </section>

        </main>
    );
};

export default PeolpeCard;