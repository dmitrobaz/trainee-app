import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


import { Header, MainWrapper, MyLoader, PeopleCard } from '../components';
import { addPeopleToCart } from '../redux/actions/addPeopleToCart';
import { addStarShipsToCart } from '../redux/actions/addStarShipsToCart';
import { imagesPeopleBig, imagesStarShipsBig } from '../assets/img';


const CardPage: React.FC = () => {
    const [statusRequst, setStatusRequest] = useState<boolean>(false)
    const [cardPageData, setCardPageData] = useState<any>(useLocation().props)
    console.log(cardPageData);

    const dispatch = useDispatch()

    const currentPageUrl = useLocation().pathname
    const itemRequestUrl = useLocation().search.split('=')[1]

    useEffect(() => {
        if (!cardPageData) {
            axios.get(itemRequestUrl).then(({ data }) => {
                setCardPageData(data)
            })
        }
        setStatusRequest(true)
    }, [])

    useEffect(() => {
        !cardPageData ? setStatusRequest(false) : setStatusRequest(true)
    }, [cardPageData])

    const onAddToCart = () => {
        currentPageUrl.includes('people')
            ? dispatch(addPeopleToCart({ data: cardPageData, type: 'people' }))
            : dispatch(addStarShipsToCart({ data: cardPageData, type: 'starships' }))
    }

    return (
        <>
            <Header />

            {statusRequst
                ? currentPageUrl.includes('people')
                    // CARD PAGE FOR PEOPLE =========================================================================
                    ? <MainWrapper title={cardPageData.name} linkArrowLeft="/products/people" classContent="card">
                        <div className="card__item">
                            <p className='card__item-img'>
                                <img src={`${imagesPeopleBig[Math.floor(Math.random() * imagesPeopleBig.length)].default}`} alt="Star Wars character image" />
                            </p>
                            <div>
                                <h3 className="card__item-title">{`${cardPageData.name}`}</h3>
                                <ul className='card__item-content'>
                                    <li className="card__item-descr">{`Gender: ${cardPageData.gender}`}</li>
                                    <li className="card__item-descr">{`Height: ${cardPageData.height}`}</li>
                                    <li className="card__item-descr">{`Mass: ${cardPageData.mass}`}</li>
                                    <li className="card__item-descr">{`Skin color: ${cardPageData.skin_color}`}</li>
                                    <li className="card__item-descr">{`Eye color: ${cardPageData.eye_color}`}</li>
                                </ul>
                                <p className="card__item-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolorum quisquam, quod quae nostrum obcaecati hic qui ducimus atque rerum, perferendis facilis neque praesentium sequi dolor officiis. Perferendis, praesentium possimus!</p>
                                <button onClick={onAddToCart} className="card__item-button">Add to cart</button>
                            </div>
                        </div>
                    </MainWrapper>
                    // ================================================================================================
                    // CARD PAGE FOR STARSHIPS ========================================================================
                    : <MainWrapper title={cardPageData.name} linkArrowLeft="/products/starships" classContent="card">
                        <div className="card__item">
                            <p className='card__item-img'>
                                <img src={`${imagesStarShipsBig[Math.floor(Math.random() * imagesStarShipsBig.length)].default}`} alt="Star Wars character image" />
                            </p>
                            <div>
                                <ul className='card__item-content'>
                                    <li className="card__item-title">{`${cardPageData.name}`}</li>
                                    <li className="product__item-descr">{`Model: ${cardPageData.model}`}</li>
                                    <li className="product__item-descr">{`Cost: ${cardPageData.cost_in_credits} credits`}</li>
                                </ul>
                                <p className="card__item-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolorum quisquam, quod quae nostrum obcaecati hic qui ducimus atque rerum, perferendis facilis neque praesentium sequi dolor officiis. Perferendis, praesentium possimus!</p>
                                <button onClick={onAddToCart} className="card__item-button">Add to cart</button>
                            </div>
                        </div>
                    </MainWrapper>
                // =============================================================================================
                // LOADER ======================================================================================
                : <></>}

        </>

    );
};

export default CardPage;