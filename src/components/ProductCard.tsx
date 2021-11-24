import React from 'react';

import { Link } from 'react-router-dom';

interface IProductCartProps {
    itemCount: number,
    itemSubtitle: string,
    link: string,
    img?: string
}


const ProductCard: React.FC<IProductCartProps> = ({ itemCount, itemSubtitle, link }) => {



    return (
        <Link to={link} className='product__item-main'>
            <div className="product__item-main-content">
                <h3 className="product__item-main-title">Total count:</h3>
                <h2 className="product__item-main-count">{itemCount}</h2>
            </div>
            <h3 className="product__item-main-subtitle">{itemSubtitle}</h3>
        </Link>
    );
};

export default ProductCard;