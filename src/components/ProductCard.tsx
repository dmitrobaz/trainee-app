import React from 'react';

import { Link } from 'react-router-dom';

interface IProductCartProps {
    itemCount: number,
    itemSubtitle: string,
    link: string
}

const ProductCard: React.FC<IProductCartProps> = ({ itemCount, itemSubtitle, link }) => {

    return (
        <li className='product__item-main'>
            <Link to={link} ></Link>
            <div className="product__item-main-content">
                <p className="product__item-main-title">Total count:</p>
                <span className="product__item-main-count">{itemCount}</span>
            </div>
            <h3 className="product__item-main-subtitle">{itemSubtitle}</h3>

        </li>
    );
};

export default ProductCard;