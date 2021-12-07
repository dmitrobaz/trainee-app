import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { FiArrowDown, FiArrowRight, FiMinus, FiPlus, FiX } from 'react-icons/fi';

import { imagesPeople, imagesStarShips } from '../assets/img';

import {
    minusOnePeopleFromCart, plusOnePeopleToCart,
    plusOneStarShipToCart, minusOneStarShipFromCart,
    clearOnePeopleItemCart, clearOneStarShipItemCart
} from "../redux/actions/app";

interface ICartPopupItemProps {
    dataItem: { [key: string]: any }
    typeItem: string

}
const CartPopupItem: React.FC<ICartPopupItemProps> = ({ dataItem, typeItem }) => {
    const dispatch = useDispatch()
    const itemCount = useSelector(({ app }: any) => typeItem === 'people' ? app.cart.people[itemId].count : app.cart.starships[itemId].count)

    const itemId = dataItem.url.split('/')[5]
    const itemTitle = dataItem.name
    const itemUrl = dataItem.url

    const starShipCharacteristic: { [name: string]: string } = {
        model: dataItem.model,
        manufacturer: dataItem.manufacturer,
        cost: dataItem.cost_in_credits,
        length: dataItem.length,
        speed: dataItem.max_atmosphering_speed,
        crew: dataItem.crew,
        passengers: dataItem.passengers,
        cargo: dataItem.cargo_capacity,
        consumables: dataItem.consumables,
        hyperdrive: dataItem.hyperdrive_rating,
        mglt: dataItem.MGLT,
        class: dataItem.starship_class,
        url: dataItem.url
    }

    const randomPeopleImg = useMemo(() => {
        return `${imagesPeople[Math.floor(Math.random() * imagesPeople.length)]}`
    }, [])
    const randomStarShipImg = useMemo(() => {
        return `${imagesStarShips[Math.floor(Math.random() * imagesStarShips.length)]}`
    }, [])

    const onDecreaseItem = () => {
        typeItem === "people"
            ? itemCount > 1 && dispatch(minusOnePeopleFromCart({ data: dataItem, id: itemId }))
            : itemCount > 1 && dispatch(minusOneStarShipFromCart({ data: dataItem, id: itemId }))
    }

    const onIncreaseItem = () => {
        typeItem === "people"
            ? itemCount < 99 && dispatch(plusOnePeopleToCart({ data: dataItem, id: itemId }))
            : itemCount < 99 && dispatch(plusOneStarShipToCart({ data: dataItem, id: itemId }))
    }

    const onDeleteItem = () => {

        typeItem === "people"
            ? dispatch(clearOnePeopleItemCart(itemId))
            : dispatch(clearOneStarShipItemCart(itemId))
    }

    return (
        <>
            <ul className="cart-popup__item-cards">
                <li className="cart-popup__card">
                    <button onClick={onDeleteItem} className="cart-popup__button cart-popup__button-delete"><FiX /></button>
                    <p className="cart-popup__card-img-wrapper">
                        <img className="cart-popup__card-img" src={typeItem === "people" ? randomPeopleImg : randomStarShipImg} alt="" />
                        <div className="cart-popup__card-count-wrapper">
                            <button onClick={onDecreaseItem} className="cart-popup__button"><FiMinus /></button><span className="cart-popup__card-count">{itemCount}</span><button onClick={onIncreaseItem} className="cart-popup__button"><FiPlus /></button>
                        </div>
                    </p>
                    {typeItem === "people"
                        ? <ul className="cart-popup__card-data">
                            <li className="cart-popup__card-data-title">{itemTitle}</li>
                            <li className="cart-popup__card-data-descr">
                                <b style={{ textTransform: "capitalize" }}>Url: </b>
                                {itemUrl}
                            </li>
                        </ul>
                        : <ul className="cart-popup__card-data">
                            <li className="cart-popup__card-data-title">{itemTitle}</li>
                            <details>
                                <summary>Star ship characteristic<FiArrowDown /></summary>
                                {Object.keys(starShipCharacteristic).map((item: string) =>
                                    <li className="cart-popup__card-data-descr">
                                        <b style={{ textTransform: "capitalize" }}>{`${item}`}:</b>
                                        {`${starShipCharacteristic[item]}`}
                                    </li>)}</details>
                        </ul>}
                    <Link className="cart-popup__button cart-popup__button-go-card" to={{
                        pathname: typeItem === 'people' ? "/products/people/card" : "/products/starships/card",
                        search: `?id=${itemId}`,
                        props: typeItem
                    }}>Go to card <FiArrowRight /></Link >
                </li>
            </ul>
        </>
    );
}


export default CartPopupItem;