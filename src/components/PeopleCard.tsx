import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { addPeopleToCart } from '../redux/actions/app/';


interface IPeopleCard {
    img?: string,
    currentCardData: any,
    styleCard?: boolean
}

const PeopleCard: React.FC<IPeopleCard> = ({ currentCardData, img, styleCard }) => {
    const parseDataFromLS = (localStorage: any) => JSON.parse(localStorage)

    const dispatch = useDispatch()

    const onAddToCart = () => {
        dispatch(addPeopleToCart(currentCardData))

        const currentPeopleDataFromLS = parseDataFromLS(localStorage.getItem('peopleCardsData'))

        if (currentPeopleDataFromLS === null || currentPeopleDataFromLS === []) {
            localStorage.setItem('peopleCardsData', JSON.stringify([currentCardData]))
            return
        }
        if (currentPeopleDataFromLS !== null || currentPeopleDataFromLS !== []) {
            localStorage.setItem('peopleCardsData', JSON.stringify([...currentPeopleDataFromLS, currentCardData]))
            return
        }
    }
    return (
        <li className='product__item'>
            <Link to={{
                pathname: "/products/people/card",
                search: `?req=${currentCardData.url}`
            }}></Link >

            <div className={styleCard ? "product__item-content-list" : "product__item-content"}>
                <p>
                    <img src={img} alt="Star Wars character image" />
                </p>
                <div>
                    <ul className={styleCard ? 'product__item-currentCardData-list' : ''}>
                        <li className="product__item-currentCardData">{`Name: ${currentCardData.name}`}</li>
                        <li className="product__item-currentCardData">{`Gender: ${currentCardData.gender}`}</li>
                        <li className="product__item-currentCardData">{`Height: ${currentCardData.height}`}</li>
                        <li className="product__item-currentCardData">{`Mass: ${currentCardData.mass}`}</li>
                        <li className="product__item-currentCardData">{`Skin color: ${currentCardData.skin_color}`}</li>
                    </ul>
                    <button onClick={onAddToCart} className="product__item-button">Add to cart</button>

                </div>


            </div>
        </li>
    );
};

export default PeopleCard;