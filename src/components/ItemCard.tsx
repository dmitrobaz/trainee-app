import React from 'react';

import { Link } from 'react-router-dom';

interface IItemCard {
    typeCard: string,
    itemSubtitle?: string,
    link: string,
    img?: string
    descr: any,
    styleCard?: boolean
}


const ItemCard: React.FC<IItemCard> = ({ link, descr, img, typeCard, styleCard }) => {
    return (
        <li className='product__item'>
            <Link to={link} ></Link >

            {typeCard === 'people'
                ? <div className={styleCard ? "product__item-content-list" : "product__item-content"}>
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
                    </div>

                </div>
                : <div className={styleCard ? "product__item-content-list" : "product__item-content"}>
                    <p>
                        <img src={img} alt="Space ship image" />
                    </p>
                    <section>
                        <h4>{`${descr.name}`}</h4>
                        <ul className={styleCard ? 'product__item-descr-list' : ''}>
                            <li className="product__item-descr">{`Model: ${descr.model}`}</li>
                            <li className="product__item-descr">{`Cost: ${descr.cost_in_credits} credits`}</li>
                        </ul>
                    </section>

                </div>}
        </li>
    );
};

export default ItemCard;