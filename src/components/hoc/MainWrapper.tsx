import React, { useState } from 'react';
import { FiArrowLeft, FiList, FiLogOut, FiSquare } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { NavButtons } from '..';

interface IMainProps {
    children?: any,
    title?: string,
    classSection?: string,
    classContent?: string,
    linkArrowLeft?: string,
    onClick?: any
}

const MainWrapper: React.FC<IMainProps> = ({ children, title, classSection = 'product', classContent = 'product-wrapper', onClick, linkArrowLeft }) => {

    const [view, setView] = useState<boolean>(JSON.parse(localStorage.getItem('isStyleLisCard') || '{}') || false)


    const onClickNavButton = () => {
        onClick()
        setView(!view)
    }

    return (
        <section className={classSection}>
            <header className="product-header">
                <h1>{title}</h1>
                <NavButtons onClick={onClickNavButton} view={view} linkArrowLeft={linkArrowLeft} />
            </header>
            <main className={classContent}>
                {children}
            </main>
        </section>
    );
};

export default MainWrapper;