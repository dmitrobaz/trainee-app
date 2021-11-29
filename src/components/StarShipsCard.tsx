import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { addStarShipsToCart } from '../redux/actions/addStarShipsToCart';

interface IStarShipsCard {
    img?: string,
    descr: any,
    styleCard?: boolean
}

const StarShipsCard: React.FC<IStarShipsCard> = ({ descr, img, styleCard }) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        const itemData = descr
        const payload = { data: itemData, type: 'starships' }

        dispatch(addStarShipsToCart(payload))
    }
    return (
        <li className='product__item'>
            <Link to={{
                pathname: "/products/starships/card",
                search: `?id=${descr.url && descr.url.split('/')[5]}`
            }}></Link >
            <div className={styleCard ? "product__item-content-list" : "product__item-content"}>
                <p>
                    <img src={img} alt="Space ship image" />
                </p>
                <section>
                    <h4>{`${descr.name}`}</h4>
                    <ul className={styleCard ? 'product__item-descr-list' : ''}>
                        <li className="product__item-descr">{`Model: ${descr.model}`}</li>
                        <li className="product__item-descr">{`Cost: ${descr.cost_in_credits} credits`}</li>
                    </ul>
                    <button onClick={clickHandler} className="product__item-button">Add to cart</button>

                </section>
            </div>
        </li>
    );
};

export default StarShipsCard;