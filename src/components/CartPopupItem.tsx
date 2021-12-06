import React from 'react';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { imagesPeople, imagesStarShips } from '../assets/img';
import { clearOnePeopleItemCart, clearOneStarShipItemCart } from '../redux/actions/app/';

import { minusOnePeopleFromCart, plusOnePeopleToCart, plusOneStarShipToCart, minusOneStarShipFromCart } from "../redux/actions/app/cart"

interface ICartPopupItemProps {
    itemObj: { [key: string]: any }

}

const CartPopupItem: React.FC<ICartPopupItemProps> = ({ itemObj }) => {
    const dispatch = useDispatch()
    const cart = useSelector(({ app }: any) => app.cart)

    const randomPeopleImg = `${imagesPeople[Math.floor(Math.random() * imagesPeople.length)]}`
    const randomStarShipImg = `${imagesStarShips[Math.floor(Math.random() * imagesStarShips.length)]}`


    const itemCount = itemObj.data.length
    const itemTitle = itemObj.data[0].name
    const itemUrl = itemObj.data[0].url

    const OnDecreaseItem = () => {
        itemObj.type === "people"
            ? dispatch(minusOnePeopleFromCart(itemObj))
            : dispatch(minusOneStarShipFromCart(itemObj))

    }

    const OnIncreaseItem = () => {
        itemObj.type === "people"
            ? dispatch(plusOnePeopleToCart(itemObj))
            : dispatch(plusOneStarShipToCart(itemObj))

    }

    const onDeleteItem = () => {

        itemObj.type === "people"
            ? dispatch(clearOnePeopleItemCart(itemObj.data[0].name))
            : dispatch(clearOneStarShipItemCart(itemObj.data[0].name))
    }

    return (
        <>
            <ul className="cart-popup__item-cards">
                <li className="cart-popup__card">
                    <button onClick={onDeleteItem} className="cart-popup__button cart-popup__button-delete"><FiX /></button>
                    <p className="cart-popup__card-img">
                        <img src={itemObj.type === "people" ? randomPeopleImg : randomStarShipImg} alt="" />
                        <div className="cart-popup__card-count-wrapper">
                            <button onClick={OnDecreaseItem} className="cart-popup__button"><FiMinus /></button><span className="cart-popup__card-count">{itemCount}</span><button onClick={OnIncreaseItem} className="cart-popup__button"><FiPlus /></button>
                        </div>
                    </p>
                    <ul className="cart-popup__card-data">
                        <li className="cart-popup__card-data-title">{itemTitle}</li>
                        <li className="cart-popup__card-data-descr">{itemUrl}</li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default CartPopupItem;