import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


import { RiSpaceShipFill } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

interface IButtonProps {
    totalCount?: number,
    peopleCount?: number,
    starShipsCount?: number
}

const ButtonCart: React.FC<IButtonProps> = ({ totalCount, peopleCount, starShipsCount }) => {
    const [active, setActive] = useState<boolean>(false)

    const history = useHistory()

    const clickHandler = () => {
        // history.push('/cart')
        setActive(!active)
    }
    return (
        <>
            <button onClick={clickHandler} className="button-cart__item button-cart">
                {(totalCount !== 0) && <span className="button-cart__item-count">{totalCount}</span>}
                <FaShoppingCart style={{ transform: "scale(2.3)" }} fill='#3f3f3f' />
            </button>
            {active &&
                <div className="button-cart__popup">

                    <div className="button-cart__item">
                        {starShipsCount && <span className="button-cart__item-count">{starShipsCount}</span>}
                        <RiSpaceShipFill style={{ transform: "scale(2.3)", marginRight: "20px" }} fill='#3f3f3f' />
                    </div>
                    <div className="button-cart__item">
                        {peopleCount && <span className="button-cart__item-count">{peopleCount}</span>}
                        <BsPeopleFill style={{ transform: "scale(2.3)", marginRight: "10px" }} fill='#3f3f3f' />
                    </div>
                </div>
            }
            {/* {active && (totalCount && totalCount > 0)

                ? <button
                    onMouseEnter={() => setActive(!active)}
                    onMouseLeave={() => setActive(!active)}
                    onClick={clickHandler}

                    className="button-cart"
                >
                    <div className="button-cart__item">
                        {starShipsCount && <span className="button-cart__item-count">{starShipsCount}</span>}
                        <RiSpaceShipFill style={{ transform: "scale(2.3)", marginRight: "20px" }} fill='#3f3f3f' />
                    </div>
                    <div className="button-cart__item">
                        {peopleCount && <span className="button-cart__item-count">{peopleCount}</span>}
                        <BsPeopleFill style={{ transform: "scale(2.3)", marginRight: "10px" }} fill='#3f3f3f' />
                    </div>
                </button>

                : <button
                    onMouseEnter={() => setActive(!active)}
                    onMouseLeave={() => setActive(!active)}
                    className="button-cart"
                >
                    <div className="button-cart__item">
                        {(peopleCount || starShipsCount && totalCount) && <span className="button-cart__item-count">{totalCount}</span>}
                        <FaShoppingCart style={{ transform: "scale(2.3)" }} fill='#3f3f3f' />
                    </div>
                </button>
            } */}
        </>
    );
};

export default ButtonCart;