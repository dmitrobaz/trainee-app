import React from 'react';

import { Link } from 'react-router-dom';

interface IItemCard {
    itemSubtitle?: string,
    link?: string,
    img?: string
    descr: string
}


const ItemCard: React.FC<IItemCard> = ({ itemSubtitle, link, descr }) => {
    return (
        <Link to={link} className='product__item'>
            <div className="product__item-content">
                <img src="https://via.placeholder.com/150" alt="Item img" />
                <p className="product__item-descr">{descr}</p>
            </div>
        </Link>
    );
};

export default ItemCard;