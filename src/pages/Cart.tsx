import React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Header, MainWrapper, ProductCard } from '../components';

import { clearCart } from "../redux/actions/app/cart/clearCart"
const Cart = () => {
    const dispatch = useDispatch()
    const cartData = useSelector(({ app }: any) => app.cart)

    const totalPeopleCount = cartData.people && cartData.people.length
    const totalStarShipsCount = cartData.starships && cartData.starships.length


    const onClickClearCart = () => {
        const isConfirm: boolean = window.confirm('Are you sure you want to empty your cart?')
        if (isConfirm) {
            dispatch(clearCart())
            localStorage.removeItem('peopleCardsData')
            localStorage.removeItem('starSCardsData')
        }
    }
    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <Header />
            <MainWrapper title="Cart" linkArrowLeft='/products' classContent='product-wrapper-main'>
                <ul>
                    <ProductCard itemCount={totalStarShipsCount} itemSubtitle="Starships" link='/products' />

                    <ProductCard itemCount={totalPeopleCount} itemSubtitle="People" link='/products' />

                </ul>
                <button onClick={onClickClearCart}>Clear cart</button>

            </MainWrapper>
        </>
    );
};

export default Cart;