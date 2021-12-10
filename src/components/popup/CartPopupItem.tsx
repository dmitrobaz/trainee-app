import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { FiArrowDown, FiArrowRight, FiMinus, FiPlus, FiX } from 'react-icons/fi';

import { imagesPeople, imagesStarShips } from '../../assets/img';

import {
    minusOnePeopleFromCart, plusOnePeopleToCart,
    plusOneStarShipToCart, minusOneStarShipFromCart,
    clearOnePeopleItemCart, clearOneStarShipItemCart
} from "../../redux/actions/app";

import * as utils from "../../utils";

interface ICartPopupItemProps {
    dataItem: { [key: string]: any }
    typeItem: string

}
const CartPopupItem: React.FC<ICartPopupItemProps> = ({ dataItem, typeItem }) => {
    const cart = utils.jsonParse(localStorage.getItem('cart'))

    const itemId = dataItem.url.split('/')[5]
    const itemTitle = dataItem.name
    const itemUrl = dataItem.url

    const dispatch = useDispatch()
    const itemCount = useSelector(({ app }: any) => typeItem === 'people' ? app.cart.people[itemId].count : app.cart.starships[itemId].count)

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


        if (typeItem === "people" && itemCount > 1) {
            dispatch(minusOnePeopleFromCart({ data: dataItem, id: itemId }))
            const oldItems = cart.people[itemId]
            const newObjItems = oldItems.count > 1 ? { data: dataItem, count: cart.people[itemId].count - 1 } : oldItems;
            localStorage.setItem('cart', JSON.stringify({
                ...cart,
                people: {
                    ...cart.people,
                    [itemId]: newObjItems,
                    peopleTotalCount: cart.people.peopleTotalCount - 1
                },
            }))
            return
        }
        if (typeItem === "starship" && itemCount > 1) {
            dispatch(minusOneStarShipFromCart({ data: dataItem, id: itemId }))
            const oldItems = cart.starships[itemId]
            const newObjItems = oldItems.count > 1 ? { data: dataItem, count: cart.starships[itemId].count - 1 } : oldItems;
            localStorage.setItem('cart', JSON.stringify({
                ...cart,
                starships: {
                    ...cart.starships,
                    [itemId]: newObjItems,
                    starShipTotalCount: cart.starships.starShipTotalCount - 1
                },
            }))
        }


    }

    const onIncreaseItem = () => {

        if (typeItem === "people" && itemCount < 99) {
            dispatch(plusOnePeopleToCart({ data: dataItem, id: itemId }))
            const newObjItems = { id: itemId, data: dataItem, count: cart.people[itemId].count + 1 }
            localStorage.setItem('cart', JSON.stringify({
                ...cart,
                people: {
                    ...cart.people,
                    [itemId]: newObjItems,
                    peopleTotalCount: utils.getTotalCount(cart.people)
                }
            }))
            return
        }
        if (typeItem === "starship" && itemCount < 99) {
            dispatch(plusOneStarShipToCart({ data: dataItem, id: itemId }))
            const newObjItems = { id: itemId, data: dataItem, count: cart.starships[itemId].count + 1 }
            localStorage.setItem('cart', JSON.stringify({
                ...cart,
                starships: {
                    ...cart.starships,
                    [itemId]: newObjItems,
                    starShipTotalCount: utils.getTotalCount(cart.starships)
                }
            }))
        }

    }

    const onDeleteItem = () => {

        if (typeItem === "people") {
            dispatch(clearOnePeopleItemCart(itemId))
            const newCart = {
                ...cart.people,
                peopleTotalCount: cart.people.peopleTotalCount - cart.people[itemId].count
            }
            delete newCart[itemId]

            localStorage.setItem('cart', JSON.stringify({
                ...cart,
                people: Object.keys(newCart).length === 0
                    ? null
                    : newCart
            }))
            return
        }
        dispatch(clearOneStarShipItemCart(itemId))
        const newCart = {
            ...cart.starships,
            starShipTotalCount: cart.starships.starShipTotalCount - cart.starships[itemId].count
        }
        delete newCart[itemId]

        localStorage.setItem('cart', JSON.stringify({
            ...cart,
            starships: Object.keys(newCart).length === 0
                ? null
                : newCart
        }))
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