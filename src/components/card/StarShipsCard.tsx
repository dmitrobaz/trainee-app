import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addStarShipsToCart } from '../../redux/actions/app';

import * as utils from "../../utils";

interface IStarShipsCard {
    img: string,
    currentCardData: {
        [name: string]: any
    },
    styleCard: boolean
}

const StarShipsCard: React.FC<IStarShipsCard> = ({ currentCardData, img, styleCard }) => {
    const [isItemAdded, setIsItemAdded] = useState<boolean>(false)

    const parseDataFromLS = (localStorage: any) => JSON.parse(localStorage)

    const dispatch = useDispatch()
    const starshipsData = useSelector(({ app }: any) => app.cart.starships)

    const starShipId = currentCardData.url.split('/')[5]

    const isItemExistInStore = starshipsData.starShipTotalCount && starshipsData[starShipId]?.count

    useEffect(() => {
        setIsItemAdded(isItemExistInStore)
    }, [])

    const memoImg = useMemo(() => {
        return img
    }, [])

    const clickHandler = () => {
        setIsItemAdded(true)

        dispatch(addStarShipsToCart({ data: currentCardData, id: starShipId }))

        const cartDataFromLS = utils.jsonParse(localStorage.getItem('cart'))

        if (!cartDataFromLS.starships || !(starShipId in cartDataFromLS.starships)) {
            localStorage.setItem('cart', JSON.stringify({
                ...cartDataFromLS,
                starships: {
                    ...cartDataFromLS.starships,
                    [starShipId]: {
                        id: starShipId, data: currentCardData, count: 1
                    },
                    starShipTotalCount: utils.getTotalCount(cartDataFromLS.starships)

                }
            }))
            return
        }
        if (starShipId in cartDataFromLS.starships) {
            localStorage.setItem('cart', JSON.stringify({
                ...cartDataFromLS,
                starships: {
                    ...cartDataFromLS.starships,
                    [starShipId]: {
                        id: starShipId, data: currentCardData, count: cartDataFromLS.starships[starShipId].count + 1
                    },
                    starShipTotalCount: utils.getTotalCount(cartDataFromLS.starships)
                }
            }))
            return
        }
    }
    return (
        <li className='product__item'>
            <Link to={{
                pathname: "/products/starships/card",
                search: `?id=${starShipId}`
            }}></Link >
            <div className={styleCard ? "product__item-content-list" : "product__item-content"}>
                <p className="product__item-content-img-wrapper">
                    <img className="product__item-content-img" src={memoImg} alt="Space ship image" />
                </p>
                <section>
                    <h4>{`${currentCardData.name}`}</h4>
                    <ul className={styleCard ? 'product__item-currentCardData-list' : ''}>
                        <li className="product__item-currentCardData">{`Model: ${currentCardData.model}`}</li>
                        <li className="product__item-currentCardData">{`Cost: ${currentCardData.cost_in_credits} credits`}</li>
                    </ul>
                    <button onClick={clickHandler} className={!isItemAdded ? "product__item-button" : "product__item-button product__item-button--added"}>{!isItemAdded ? 'Add to cart' : 'Added'}</button>

                </section>
            </div>
        </li>
    );
};

export default StarShipsCard;