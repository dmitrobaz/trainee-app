import React, { useState } from 'react';
import { FiArrowLeft, FiList, FiLogOut, FiSquare } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { NavButton } from './';

interface IMainProps {
    children?: any,
    title: string,
    classSection?: string,
    classContent?: string,
    link?: string,
    onClick?: any
}

const MainWrapper: React.FC<IMainProps> = ({ children, title, classSection = 'product', classContent = 'product-wrapper', onClick, link = "/products" }) => {

    const [view, setView] = useState<boolean>(JSON.parse(localStorage.getItem('isStyleLisCard') || '{}') || false)


    const onClickNavButton = () => {
        onClick()
        setView(!view)
    }

    return (
        <section className={classSection}>
            <header>
                <h1>{title}</h1>
                <NavButton onClick={onClickNavButton} view={view} />
            </header>
            <main className={classContent}>
                {children}
            </main>
        </section>
    );
};

export default MainWrapper;