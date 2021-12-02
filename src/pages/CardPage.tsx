import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


import { Header, MainWrapper, ShowInfo } from '../components';

import { imagesPeopleBig, imagesStarShipsBig } from '../assets/img';
import { getOnePeopleResponse } from '../redux/actions/getResponse';
import { addStarShipsToCart } from '../redux/actions/addStarShipsToCart';
import { addPeopleToCart } from '../redux/actions/addPeopleToCart';


const CardPage: React.FC = () => {
    const parseDataFromLS = (localStorage: any) => JSON.parse(localStorage)

    const dispatch = useDispatch()
    const responseCurrentPage = useSelector(({ requestsStates }: any) => requestsStates.responseCurrentPage)

    const currentPageData = responseCurrentPage.data

    const currentPageUrl = useLocation().pathname
    const itemRequestUrl = useLocation().search.split('=')[1]
    const randomPeopleImg = imagesPeopleBig[Math.floor(Math.random() * imagesPeopleBig.length)].default
    const randomStarShipImg = imagesStarShipsBig[Math.floor(Math.random() * imagesStarShipsBig.length)].default


    useEffect(() => {
        dispatch(getOnePeopleResponse.get(itemRequestUrl))
    }, [])

    const onAddToCart = () => {
        if (currentPageUrl.includes('people')) {
            dispatch(addPeopleToCart(currentPageData))

            const currentPeopleDataFromLS = parseDataFromLS(localStorage.getItem('peopleCardsData'))

            if (currentPeopleDataFromLS === null || currentPeopleDataFromLS === []) {
                localStorage.setItem('peopleCardsData', JSON.stringify([currentPageData]))
                return
            }
            if (currentPeopleDataFromLS !== null || currentPeopleDataFromLS !== []) {
                localStorage.setItem('peopleCardsData', JSON.stringify([...currentPeopleDataFromLS, currentPageData]))
                return

            } else {
                dispatch(addStarShipsToCart({ data: currentPageData, type: 'starships' }))

                const currentPeopleDataFromLS = parseDataFromLS(localStorage.getItem('starShipCardsData'))

                if (currentPeopleDataFromLS === null || currentPeopleDataFromLS === []) {
                    localStorage.setItem('starShipCardsData', JSON.stringify([currentPageData]))
                    return
                }
                if (currentPeopleDataFromLS !== null || currentPeopleDataFromLS !== []) {
                    localStorage.setItem('starShipCardsData', JSON.stringify([...currentPeopleDataFromLS, currentPageData]))
                    return
                }


            }


        }
    }

    return (
        <>
            <Header />

            {!responseCurrentPage.pending
                ? currentPageUrl.includes('people')
                    // CARD PAGE FOR PEOPLE =========================================================================
                    ? <MainWrapper title={currentPageData.name} linkArrowLeft="/products/people" classContent="card">
                        <div className="card__item">
                            <p className='card__item-img'>
                                <img src={randomPeopleImg} alt="Star Wars character image" />
                            </p>
                            <div>
                                <h3 className="card__item-title">{`${currentPageData.name}`}</h3>
                                <ul className='card__item-content'>
                                    <li className="card__item-descr">{`Gender: ${currentPageData.gender}`}</li>
                                    <li className="card__item-descr">{`Birth year: ${currentPageData.birth_year}`}</li>
                                    <li className="card__item-descr">{`Height: ${currentPageData.height}`}</li>
                                    <li className="card__item-descr">{`Mass: ${currentPageData.mass}`}</li>
                                    <li className="card__item-descr">{`Skin color: ${currentPageData.skin_color}`}</li>
                                    <li className="card__item-descr">{`Eye color: ${currentPageData.eye_color}`}</li>
                                </ul>
                                <br />
                                <ShowInfo infoApiUrl={currentPageData.films} />
                                <p className="card__item-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolorum quisquam, quod quae nostrum obcaecati hic qui ducimus atque rerum, perferendis facilis neque praesentium sequi dolor officiis. Perferendis, praesentium possimus!</p>
                                <button onClick={onAddToCart} className="card__item-button">Add to cart</button>
                            </div>
                        </div>
                    </MainWrapper>
                    // ================================================================================================
                    // CARD PAGE FOR STARSHIPS ========================================================================
                    : <MainWrapper title={currentPageData.name} linkArrowLeft="/products/starships" classContent="card">
                        <div className="card__item">
                            <p className='card__item-img'>
                                <img src={randomStarShipImg} alt="Star Wars character image" />
                            </p>
                            <div>
                                <ul className='card__item-content'>
                                    <li className="card__item-title">{`${currentPageData.name}`}</li>
                                    <li className="product__item-descr">{`Model: ${currentPageData.model}`}</li>
                                    <li className="product__item-descr">{`Cost: ${currentPageData.cost_in_credits} credits`}</li>
                                </ul>
                                <br />
                                <ShowInfo infoApiUrl={currentPageData.films} />

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