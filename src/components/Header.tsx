import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonCart } from '.';

const Header = () => {

    const totalCount = useSelector(({ cart }: any) => cart.people.length + cart.starships.length)
    const peopleCount = useSelector(({ cart }: any) => cart.people.length)
    const starShipsCount = useSelector(({ cart }: any) => cart.starships.length)

    return (
        <header className="header">
            <nav>
                <Link to="/products">
                    <AiFillHome style={{ transform: "scale(2.1)" }} fill='#3f3f3f' />
                </Link>
            </nav>
            <ButtonCart
                totalCount={totalCount === 0 ? '' : totalCount}
                peopleCount={peopleCount === 0 ? '' : peopleCount}
                starShipsCount={starShipsCount === 0 ? '' : starShipsCount}
            />
        </header>
    );
};

export default Header;