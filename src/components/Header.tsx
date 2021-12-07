import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ButtonCart } from '../components';

import { AiFillHome } from 'react-icons/ai';

const Header: React.FC = () => {
    const cartSelector = useSelector(({ app }: any) => app.cart)

    const peopleCount = cartSelector.people.peopleTotalCount
    const starShipsCount = cartSelector.starships.starShipTotalCount
    const totalItemCount = peopleCount + starShipsCount

    return (
        <header className="header">
            <nav>
                <Link to="/products">
                    <AiFillHome style={{ transform: "scale(2.1)" }} fill='#3f3f3f' />
                </Link>
            </nav>
            <ButtonCart
                totalCount={totalItemCount}
                peopleCount={peopleCount}
                starShipsCount={starShipsCount}
            />

        </header>
    );
};

export default Header;