import React from 'react';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import { MainWrapper } from '.';

const CartPopup = () => {
    return (

        <MainWrapper>
            <section className="cart-popup__items-wrapper">
                <h3 className="cart-popup__section-title"></h3>
                <ul className="cart-popup__item-cards">
                    <li className="cart-popup__card">
                        <button className="cart-popup__button-delete"><FiX/></button>
                        <p className="cart-popup__card-img">
                            <img src="" alt="" />
                            <div className="cart-popup__card-count-wrapper">
                                <button className="cart-popup__button"><FiMinus/></button><span className="cart-popup__card-count">12</span><button className="cart-popup__button"><FiPlus/></button>
                            </div>
                        </p>
                        <ul className="cart-popup__card-data">
                            <li className="cart-popup__card-data-title"></li>
                            <li className="cart-popup__card-data-descr"></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </MainWrapper >
    );
};

export default CartPopup;