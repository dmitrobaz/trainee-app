import React from 'react';
import { useSelector } from 'react-redux';
import { Header, MainWrapper, ProductCard } from '../components';

const Cart = () => {
    const cartData = useSelector(({ applicationStates }: any) => applicationStates.cart)

    const totalPeopleCount = cartData.people && cartData.people.length
    const totalStarShipsCount = cartData.starships && cartData.starships.length


    return (
        <>
            <Header />
            <MainWrapper title="Cart" linkArrowLeft='/products' classContent='product-wrapper-main'>
                <ul>
                    <ProductCard itemCount={totalStarShipsCount} itemSubtitle="Starships" link='/products' />

                    <ProductCard itemCount={totalPeopleCount} itemSubtitle="People" link='/products' />
                </ul>
            </MainWrapper>
        </>
    );
};

export default Cart;