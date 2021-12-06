import React, { useEffect, useRef, useState } from 'react';
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
    const sortRef: any = useRef();

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    const handleOutsideClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setActive(false);
        }
    };

    const onClickButton = () => {
        history.push('/cart')
    }

    return (
        <>
            <button onMouseEnter={() => totalCount && totalCount > 0 && setActive(true)} onClick={onClickButton} className="button-cart__item button-cart">
                {(totalCount !== 0) && <span className="button-cart__item-count">{totalCount}</span>}
                <FaShoppingCart style={{ transform: "scale(2.3)" }} fill='#3f3f3f' />
            </button>
            {active &&
                <ul ref={sortRef} className="button-cart__popup">

                    <li className="button-cart__popup-item">
                        <span className="button-cart__popup-item-descr" >Star ship cards count: {starShipsCount}</span>
                        <RiSpaceShipFill style={{ transform: "scale(2.3)", marginRight: "20px" }} fill='#3f3f3f' />
                    </li>
                    <li className="button-cart__popup-item">
                        <span className="button-cart__popup-item-descr" >People cards count: {peopleCount}</span>
                        <BsPeopleFill style={{ transform: "scale(2.3)", marginRight: "20px" }} fill='#3f3f3f' />
                    </li>
                </ul>
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