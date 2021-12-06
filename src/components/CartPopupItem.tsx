import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowRight, FiMinus, FiPlus, FiX } from 'react-icons/fi';

import { imagesPeople, imagesStarShips } from '../assets/img';
import { clearOnePeopleItemCart, clearOneStarShipItemCart } from '../redux/actions/app/';

import { minusOnePeopleFromCart, plusOnePeopleToCart, plusOneStarShipToCart, minusOneStarShipFromCart } from "../redux/actions/app/cart"

interface ICartPopupItemProps {
    itemObj: { [key: string]: any }

}
const CartPopupItem: React.FC<ICartPopupItemProps> = React.memo(function CartPopupItem({ itemObj }) {
    const dispatch = useDispatch()

    const randomPeopleImg = `${imagesPeople[Math.floor(Math.random() * imagesPeople.length)]}`
    const randomStarShipImg = `${imagesStarShips[Math.floor(Math.random() * imagesStarShips.length)]}`

    const itemCount = itemObj.data.length
    const itemTitle = itemObj.data[0].name
    const itemUrl = itemObj.data[0].url

    const starShipCharacteristic: { [name: string]: string } = {
        model: itemObj.data[0].model,
        manufacturer: itemObj.data[0].manufacturer,
        cost: itemObj.data[0].cost_in_credits,
        length: itemObj.data[0].length,
        speed: itemObj.data[0].max_atmosphering_speed,
        crew: itemObj.data[0].crew,
        passengers: itemObj.data[0].passengers,
        cargo: itemObj.data[0].cargo_capacity,
        consumables: itemObj.data[0].consumables,
        hyperdrive: itemObj.data[0].hyperdrive_rating,
        mglt: itemObj.data[0].MGLT,
        class: itemObj.data[0].starship_class,
        url: itemObj.data[0].url
    }

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
                    {itemObj.type === "people"
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
                        pathname: "/products/people/card",
                        search: `?req=${itemUrl}`
                    }}>Go to card <FiArrowRight /></Link >
                </li>
            </ul>
        </>
    );
})


export default CartPopupItem;