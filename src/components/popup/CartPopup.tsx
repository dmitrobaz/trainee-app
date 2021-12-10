import React, { useEffect, useRef, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { CartPopupItem, MainWrapper } from '../';

interface ICartPopupProps {
    closePopup: any
}

const CartPopup: React.FC<ICartPopupProps> = ({ closePopup }) => {
    const [isViewPopup, setIsViewPopup] = useState<boolean>(false)

    const sortRef: any = useRef()

    const dispatch = useDispatch()
    const cart = useSelector(({ app }: any) => app.cart)

    const people: Array<string> | null = cart.people.peopleTotalCount === 0 ? null : Object.keys(cart.people).slice(0, -1)
    const starships: Array<string> | null = cart.starships.starShipTotalCount === 0 ? null : Object.keys(cart.starships).slice(0, -1)

    // useEffect(() => {
    //     document.body.addEventListener('click', handleOutsideClick)
    // }, []);

    // const handleOutsideClick = (event: any) => {
    //     const path = event.path || (event.composedPath && event.composedPath());
    //     if (!path.includes(sortRef.current)) {
    //         closePopup()
    //     }
    // };
    const ocClosePopup = (event: any) => {
        closePopup()

    }

    return (

        <MainWrapper title="Cart" classSection="cart-popup__wrapper" closePopup={ocClosePopup}>
            <div ref={sortRef}>
                {!people && !starships
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
                    people && <section className="cart-popup__items-wrapper">
                        <h3 className="cart-popup__section-title">People</h3>
                        {people.map((item: any, index: number) => <CartPopupItem typeItem='people' dataItem={cart.people[item].data} key={`${index}+${item}`} />)}
                    </section>
                }

                {
                    starships && <section className="cart-popup__items-wrapper">
                        <h3 className="cart-popup__section-title">Star ships</h3>
                        {starships.map((item: any, index: number) => <CartPopupItem typeItem='starship' dataItem={cart.starships[item].data} key={`${index}+${item}`} />)}
                    </section>
                }
            </div>
        </MainWrapper >
    );
}

export default CartPopup;