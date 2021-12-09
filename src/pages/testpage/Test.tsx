import React from 'react';
import StackGrid from "react-stack-grid";

import { Card, Header } from './components';

// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import { cardConfig, categoryConfig } from "./config/config";

import './style.scss';

const Test = () => {


    return (
        <>
            <Header />
            <main className="main">
                <section className="main-top">
                    <h1 className="main-top-title">Name</h1>
                    <p className="main-top-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus pariatur aspernatur vitae commodi perferendis explicabo optio!
                    </p>
                </section>
                <ul className="category">
                    {categoryConfig.map((category: number) => <li className="category-item">{`Category${category}`}</li>)}
                </ul>

                <StackGrid columnWidth='50%' itemComponent='li' component='ul' gutterWidth={1} className="card">
                    {cardConfig.map((item: any, index: any) =>
                        <Card key={index} cardTitle={item.name} cardCategory={item.category} />)}
                </StackGrid>

            </main>
        </>
    );
};

export default Test;