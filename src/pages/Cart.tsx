import React from 'react';
import { useSelector } from 'react-redux';
import { Header, MainWrapper, ProductCard } from '../components';

const Cart = () => {
    const cartData = useSelector(({ cart }: any) => cart)

    return (
        <>
            <Header />
            <MainWrapper title="Cart" linkArrowLeft='/products' classContent='product-wrapper-main'>
                {/* <ul>{Object.keys(itemsDataFromRedux).map((item: any, index: number) =>
                    <ProductCard
                        itemCount={itemsDataFromRedux[item].data.count}
                        itemSubtitle={`${item[0].toUpperCase()}${item.slice(1)}`}
                        link={`/products/${item}`}
                        key={index} />)}
                </ul> */}
                <ul>
                    <ProductCard itemCount={cartData.starships.length} itemSubtitle="Starships" link='/products' />

                    <ProductCard itemCount={cartData.people.length} itemSubtitle="People" link='/products' />
                </ul>
            </MainWrapper>
        </>
    );
};

export default Cart;