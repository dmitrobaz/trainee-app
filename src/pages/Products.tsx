import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { MyLoader, ProductCard } from '../components';

const Products: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState<any>({ people: false, starships: false })

    useEffect(() => {

        axios.get('https://swapi.dev/api/people').then(({ data }) => {
            localStorage.setItem('peopleData', JSON.stringify(data))
            setIsLoaded((prevProps: any) => ({ ...prevProps, people: true }))
        })

        axios.get('https://swapi.dev/api/starships').then(({ data }) => {
            localStorage.setItem('starShips', JSON.stringify(data))
            setIsLoaded((prevProps: any) => ({ ...prevProps, starships: true }))
        })

    }, [])


    const peopleDataLocalStorage: any = localStorage.getItem('peopleData')
    const peopleData = JSON.parse(peopleDataLocalStorage)

    const starShipsDataLocalStorage: any = localStorage.getItem('starShips')
    const starShipsData = JSON.parse(starShipsDataLocalStorage)


    return (
        <main className='product'>
            <h1 className="product-title">Product</h1>
            <section className='product-wrapper'>
                {(isLoaded.people && isLoaded.starships)
                    ? (<div style={{ all: "inherit" }}>
                        <ProductCard itemCount={peopleData.count} itemSubtitle={'People'} link="/products/people" />
                        <ProductCard itemCount={starShipsData.count} itemSubtitle={'Star ships'} link="/products/starships" />
                    </div>)
                    : Array(2).fill(0).map((_, index) => <MyLoader key={index} />)}

            </section>

        </main>
    );
};

export default Products;