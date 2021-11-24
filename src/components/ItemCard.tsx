import React from 'react';

import { Link } from 'react-router-dom';

interface IItemCard {
    typeCard: string,
    itemSubtitle?: string,
    link?: string,
    img?: string
    descr: any,
    styleCard?: boolean
}


const ItemCard: React.FC<IItemCard> = ({ itemSubtitle, link, descr, img, typeCard, styleCard }) => {
    return (
        <Link to={link} className='product__item'>

            {typeCard === 'people'
                ? <div className={styleCard ? "product__item-content-list" : "product__item-content"}>
                    <img src={img} alt="Item img" />
                    <div className={styleCard ? 'product__item-descr-list' : ''}>
                        <p className="product__item-descr">{`Name: ${descr.name}`}</p>
                        <p className="product__item-descr">{`Gender: ${descr.gender}`}</p>
                        <p className="product__item-descr">{`Height: ${descr.height}`}</p>
                        <p className="product__item-descr">{`Mass: ${descr.mass}`}</p>
                        <p className="product__item-descr">{`Skin color: ${descr.skin_color}`}</p>
                    </div>

                </div>
                : <div className={styleCard ? "product__item-content-list" : "product__item-content"}>
                    <img src={img} alt="Item img" />
                    <div className={styleCard ? 'product__item-descr-list' : ''}>
                        <p className="product__item-descr">{`Name: ${descr.name}`}</p>
                        <p className="product__item-descr">{`Model: ${descr.model}`}</p>
                        <p className="product__item-descr">{`Cost: ${descr.cost_in_credits} credits`}</p>

                    </div>
                </div>}
        </Link >
    );
};

export default ItemCard;