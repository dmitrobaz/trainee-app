import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { CartPopupItem, MainWrapper } from '.';

interface ICartPopupProps {
    closePopup: any
}

const CartPopup: React.FC<ICartPopupProps> = ({ closePopup }) => {
    const dispatch = useDispatch()
    const cart = useSelector(({ app }: any) => app.cart)

    const people: Array<string> = Object.keys(cart.people)
    const starships: Array<string> = Object.keys(cart.starships)

    return (

        <MainWrapper title="Cart" classSection="cart-popup__wrapper" closePopup={closePopup}>
            {people.length === 0 && starships.length === 0
                && <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "400px",
                    justifyContent: "center"
                }}>
                    <FaShoppingCart style={{ transform: "scale(2.3)" }} fill='#3f3f3f' />
                    <p style={{
                        padding: "20px",
                        fontSize: "20px",
                        fontWeight: "bold"
                    }}>Cart is empty</p >
                </div>}
            {
                people.length > 0 && <section className="cart-popup__items-wrapper">
                    <h3 className="cart-popup__section-title">People</h3>
                    {people.map((item: any, index: number) => <CartPopupItem itemObj={{ data: cart.people[item], type: 'people' }} key={`${index}+${item}`} />)}
                </section>
            }

            {
                starships.length > 0 && <section className="cart-popup__items-wrapper">
                    <h3 className="cart-popup__section-title">Star ships</h3>
                    {starships.map((item: any, index: number) => <CartPopupItem itemObj={{ data: cart.starships[item], type: 'starship' }} key={`${index}+${item}`} />)}
                </section>
            }
        </MainWrapper >
    );
};

export default CartPopup;