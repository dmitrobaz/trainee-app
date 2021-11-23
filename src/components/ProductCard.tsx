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
        <Link to={link} className='product__item'>
            <div className="product__item-content">
                <h3 className="product__item-title">Total count:</h3>
                <h2 className="product__item-count">{itemCount}</h2>
            </div>
            <h3 className="product__item-subtitle">{itemSubtitle}</h3>
        </Link>
    );
};

export default ProductCard;