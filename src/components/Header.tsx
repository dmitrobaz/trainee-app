import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonCart } from '.';

const Header: React.FC = () => {
    // applicationStates contains key "users"  - all registered users and key "cart"- all added items to the cart.
    const appDataStates = useSelector(({ app }: any) => app)

    const peopleKeys = Object.keys(appDataStates.cart.people)
    const starShipKeys = Object.keys(appDataStates.cart.starships)

    const peopleCount = peopleKeys.reduce((acc: any, curr: any) => appDataStates.cart.people[curr] ? appDataStates.cart.people[curr].length + acc : 0, 0)

    const starShipsCount = starShipKeys.reduce((acc: any, curr: any) => appDataStates.cart.starships[curr] ? appDataStates.cart.starships[curr].length + acc : 0, 0)

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