import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { addPeopleToCart } from '../redux/actions/addPeopleToCart';


interface IPeopleCard {
    img?: string,
    descr: any,
    styleCard?: boolean
}

const PeopleCard: React.FC<IPeopleCard> = ({ descr, img, styleCard }) => {

    const dispatch = useDispatch()

    const onAddToCart = () => {
        dispatch(addPeopleToCart({ data: descr, type: 'people' }))
    }
    return (
        <li className='product__item'>
            <Link to={{
                pathname: "/products/people/card",
                search: `?req=${descr.url}`,
                props: descr
            }}></Link >

            <div className={styleCard ? "product__item-content-list" : "product__item-content"}>
                <p>
                    <img src={img} alt="Star Wars character image" />
                </p>
                <div>
                    <ul className={styleCard ? 'product__item-descr-list' : ''}>
                        <li className="product__item-descr">{`Name: ${descr.name}`}</li>
                        <li className="product__item-descr">{`Gender: ${descr.gender}`}</li>
                        <li className="product__item-descr">{`Height: ${descr.height}`}</li>
                        <li className="product__item-descr">{`Mass: ${descr.mass}`}</li>
                        <li className="product__item-descr">{`Skin color: ${descr.skin_color}`}</li>
                    </ul>
                    <button onClick={onAddToCart} className="product__item-button">Add to cart</button>

                </div>


            </div>
        </li>
    );
};

export default PeopleCard;