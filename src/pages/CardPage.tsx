import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Header, MainWrapper, ShowInfo } from '../components';

import { getOnePeopleResponse, getOneStarShipResponse } from '../redux/actions/request';
import { addStarShipsToCart, addPeopleToCart } from '../redux/actions/app/';

import { imagesPeopleBig, imagesStarShipsBig } from '../assets/img';


const CardPage: React.FC = () => {
    const parseDataFromLS = (localStorage: any) => JSON.parse(localStorage)

    const dispatch = useDispatch()
    const responseData: any = useSelector(({ request }: any) => request)

    const peopleData = responseData.people.data?.results[0]
    const peopleStatus = responseData.people.status

    const starShipsData = responseData.starships.data?.results[0]
    const starShipsStatus = responseData.starships.status


    const currentPageUrl = useLocation().pathname
    const itemRequestUrl = useLocation().search.split('=')[1]

    const randomPeopleImg = imagesPeopleBig[Math.floor(Math.random() * imagesPeopleBig.length)].default
    const randomStarShipImg = imagesStarShipsBig[Math.floor(Math.random() * imagesStarShipsBig.length)].default

    const portal = document.getElementById('portal')


    useEffect(() => {
        portal?.classList.remove('portal-bg-faded')


        currentPageUrl.includes('people')
            ? dispatch(getOnePeopleResponse.get(itemRequestUrl))
            : dispatch(getOneStarShipResponse.get(itemRequestUrl))
    }, [])

    const onAddToCart = () => {
        if (currentPageUrl.includes('people')) {
            dispatch(addPeopleToCart(peopleData))

            const currentPeopleDataFromLS = parseDataFromLS(localStorage.getItem('peopleCardsData'))

            if (currentPeopleDataFromLS === null || currentPeopleDataFromLS === []) {
                localStorage.setItem('peopleCardsData', JSON.stringify([peopleData]))
                return
            }
            if (currentPeopleDataFromLS !== null || currentPeopleDataFromLS !== []) {
                localStorage.setItem('peopleCardsData', JSON.stringify([...currentPeopleDataFromLS, peopleData]))
                return

            } else {
                dispatch(addStarShipsToCart(starShipsData))

                const currentPeopleDataFromLS = parseDataFromLS(localStorage.getItem('starShipCardsData'))

                if (currentPeopleDataFromLS === null || currentPeopleDataFromLS === []) {
                    localStorage.setItem('starShipCardsData', JSON.stringify([starShipsData]))
                    return
                }
                if (currentPeopleDataFromLS !== null || currentPeopleDataFromLS !== []) {
                    localStorage.setItem('starShipCardsData', JSON.stringify([...currentPeopleDataFromLS, starShipsData]))
                    return
                }


            }


        }
    }

    return (
        <>
            <Helmet>
                <title>{currentPageUrl.includes('people') ? peopleData?.name : starShipsData?.name}</title>
            </Helmet>
            <Header />

            {peopleStatus === 'success' || starShipsStatus === 'success'
                ? currentPageUrl.includes('people')
                    // CARD PAGE FOR PEOPLE =========================================================================
                    ? <MainWrapper title={peopleData.name} linkArrowLeft="/products/people" classContent="card">
                        <div className="card__item">
                            <p className='card__item-img'>
                                <img src={randomPeopleImg} alt="Star Wars character image" />
                            </p>
                            <div>
                                <h3 className="card__item-title">{`${peopleData.name}`}</h3>
                                <ul className='card__item-content'>
                                    <li className="card__item-descr">{`Gender: ${peopleData.gender}`}</li>
                                    <li className="card__item-descr">{`Birth year: ${peopleData.birth_year}`}</li>
                                    <li className="card__item-descr">{`Height: ${peopleData.height}`}</li>
                                    <li className="card__item-descr">{`Mass: ${peopleData.mass}`}</li>
                                    <li className="card__item-descr">{`Skin color: ${peopleData.skin_color}`}</li>
                                    <li className="card__item-descr">{`Eye color: ${peopleData.eye_color}`}</li>
                                </ul>
                                <br />
                                <ShowInfo infoApiUrl={peopleData.films} />
                                <p className="card__item-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolorum quisquam, quod quae nostrum obcaecati hic qui ducimus atque rerum, perferendis facilis neque praesentium sequi dolor officiis. Perferendis, praesentium possimus!</p>
                                <button onClick={onAddToCart} className="card__item-button">Add to cart</button>
                            </div>
                        </div>
                    </MainWrapper>
                    // ================================================================================================
                    // CARD PAGE FOR STARSHIPS ========================================================================
                    : <MainWrapper title={starShipsData.name} linkArrowLeft="/products/starships" classContent="card">
                        <div className="card__item">
                            <p className='card__item-img'>
                                <img src={randomStarShipImg} alt="Star Wars character image" />
                            </p>
                            <div>
                                <ul className='card__item-content'>
                                    <li className="card__item-title">{`${starShipsData.name}`}</li>
                                    <li className="product__item-descr">{`Model: ${starShipsData.model}`}</li>
                                    <li className="product__item-descr">{`Cost: ${starShipsData.cost_in_credits} credits`}</li>
                                </ul>
                                <br />
                                <ShowInfo infoApiUrl={starShipsData.films} />

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