import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { addPeopleToCart } from '../../redux/actions/app/';

import * as utils from "../../utils";

interface IPeopleCard {
    img?: any,
    currentCardData: any,
    styleCard?: boolean
}

const PeopleCard: React.FC<IPeopleCard> = ({ currentCardData, img, styleCard }) => {
    const [isItemAdded, setIsItemAdded] = useState<boolean>(false)

    const dispatch = useDispatch()
    const peopleData = useSelector(({ app }: any) => app.cart.people)

    const peopleId = currentCardData.url.split('/')[5]

    const isItemExistInStore = peopleData.peopleTotalCount && peopleData[peopleId]?.count

    useEffect(() => {
        setIsItemAdded(isItemExistInStore)
    }, [])

    const memoImg = useMemo(() => {
        return img
    }, [])

    const onAddToCart = () => {
        setIsItemAdded(true)
        dispatch(addPeopleToCart({ data: currentCardData, id: peopleId }))

        const cartDataFromLS = utils.jsonParse(localStorage.getItem('cart'))

        if (!cartDataFromLS.people || !(peopleId in cartDataFromLS.people)) {
            localStorage.setItem('cart', JSON.stringify({
                ...cartDataFromLS,
                people: {
                    ...cartDataFromLS.people,
                    [peopleId]: {
                        id: peopleId, data: currentCardData, count: 1
                    },
                    peopleTotalCount: utils.getTotalCount(cartDataFromLS.people)
                }
            }))
            return
        }
        if (peopleId in cartDataFromLS.people) {
            localStorage.setItem('cart', JSON.stringify({
                ...cartDataFromLS,
                people: {
                    ...cartDataFromLS.people,
                    [peopleId]: {
                        id: peopleId, data: currentCardData, count: cartDataFromLS.people[peopleId].count + 1
                    },
                    peopleTotalCount: utils.getTotalCount(cartDataFromLS.people)
                }
            }))
            return
        }
    }
    return (
        <li className='product__item'>
            <Link to={{
                pathname: "/products/people/card",
                search: `?id=${peopleId}`
            }}></Link >

            <div className={styleCard ? "product__item-content-list" : "product__item-content"}>
                <p className="product__item-content-img-wrapper">
                    <img className="product__item-content-img" src={memoImg} alt="Star Wars character image" />
                </p>
                <div>
                    <ul className={styleCard ? 'product__item-currentCardData-list' : ''}>
                        <li className="product__item-currentCardData">{`Name: ${currentCardData.name}`}</li>
                        <li className="product__item-currentCardData">{`Gender: ${currentCardData.gender}`}</li>
                        <li className="product__item-currentCardData">{`Height: ${currentCardData.height}`}</li>
                        <li className="product__item-currentCardData">{`Mass: ${currentCardData.mass}`}</li>
                        <li className="product__item-currentCardData">{`Skin color: ${currentCardData.skin_color}`}</li>
                    </ul>
                    <button onClick={onAddToCart} className={!isItemAdded ? "product__item-button" : "product__item-button product__item-button--added"}>{!isItemAdded ? 'Add to cart' : 'Added'}</button>

                </div>


            </div>
        </li>
    );
};

export default PeopleCard;