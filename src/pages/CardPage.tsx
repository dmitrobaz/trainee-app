import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Header, MainWrapper, ShowInfo } from '../components';

import { getOnePeopleResponse, getOneStarShipResponse } from '../redux/actions/request';
import { addStarShipsToCart, addPeopleToCart } from '../redux/actions/app/';

import { imagesPeopleBig, imagesStarShipsBig } from '../assets/img/';


const CardPage: React.FC = () => {

    const [isItemAdded, setIsItemAdded] = useState<boolean>(false)

    const parseDataFromLS = (localStorage: any) => JSON.parse(localStorage)

    const dispatch = useDispatch()
    const responseData: any = useSelector(({ request }: any) => request)

    const cartData: any = useSelector(({ app }: any) => app.cart)


    const peopleData = responseData.people.data?.results[0]
    const peopleId = peopleData?.url.split('/')[5]
    const peopleStatus = responseData.people.status

    const starShipData = responseData.starships.data?.results[0]
    const starShipId = starShipData?.url.split('/')[5]
    const starShipsStatus = responseData.starships.status


    const currentPageUrl = useLocation().pathname
    const itemRequestUrl = useLocation().search.split('=')[1]
    const isPeoplePage = currentPageUrl.includes('people')

    const isItemExistInStore = currentPageUrl.includes('people')
        ? cartData.people.peopleTotalCount && cartData.people[peopleId]?.count
        : cartData.starships.starShipTotalCount && cartData.starships[starShipId]?.count

    const memoPeopleImg = useMemo(() => imagesPeopleBig[Math.floor(Math.random() * imagesPeopleBig.length)], [])
    const memoStarShipImg = useMemo(() => imagesStarShipsBig[Math.floor(Math.random() * imagesStarShipsBig.length)], [])

    const portal = document.getElementById('portal')

    useEffect(() => {

        portal?.classList.remove('portal-bg-faded')

        currentPageUrl.includes('people')
            ? dispatch(getOnePeopleResponse.get(`https://swapi.dev/api/people/${itemRequestUrl}/`))
            : dispatch(getOneStarShipResponse.get(`https://swapi.dev/api/starships/${itemRequestUrl}/`))

        setIsItemAdded(isItemExistInStore)
        console.log(isItemExistInStore);


    }, [])

    const onAddToCart = () => {
        setIsItemAdded(true)
        if (currentPageUrl.includes('people')) {
            dispatch(addPeopleToCart({ data: peopleData, id: peopleId }))

            const currentPeopleDataFromLS = parseDataFromLS(localStorage.getItem('peopleCardsData'))

            if (currentPeopleDataFromLS === null || currentPeopleDataFromLS === []) {
                localStorage.setItem('peopleCardsData', JSON.stringify([peopleData]))
                return
            }
            if (currentPeopleDataFromLS !== null || currentPeopleDataFromLS !== []) {
                localStorage.setItem('peopleCardsData', JSON.stringify([...currentPeopleDataFromLS, peopleData]))
                return

            }
        }

        if (currentPageUrl.includes('starships')) {

            dispatch(addStarShipsToCart({ data: starShipData, id: starShipId }))

            const currentPeopleDataFromLS = parseDataFromLS(localStorage.getItem('starShipCardsData'))

            if (currentPeopleDataFromLS === null || currentPeopleDataFromLS === []) {
                localStorage.setItem('starShipCardsData', JSON.stringify([starShipData]))
                return
            }
            if (currentPeopleDataFromLS !== null || currentPeopleDataFromLS !== []) {
                localStorage.setItem('starShipCardsData', JSON.stringify([...currentPeopleDataFromLS, starShipData]))
                return
            }
        }

    }


    return (
        <>
            <Helmet>
                <title>{currentPageUrl.includes('people') ? peopleData?.name : starShipData?.name}</title>
            </Helmet>
            <Header />

            {peopleStatus === 'success' || starShipsStatus === 'success'
                ? currentPageUrl.includes('people')
                    // CARD PAGE FOR PEOPLE =========================================================================
                    ? <MainWrapper title={peopleData.name} linkArrowLeft="/products/people" classContent="card">
                        <div className="card__item">
                            <p className='card__item-img'>
                                <img src={memoPeopleImg} alt="Star Wars character image" />
                            </p>
                            <button onClick={onAddToCart} className={!isItemAdded ? "card__item-button" : "card__item-button card__item-button--added"}>{!isItemAdded ? 'Add to cart' : 'Added'}</button>

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
                            </div>
                        </div>
                    </MainWrapper>
                    // ================================================================================================
                    // CARD PAGE FOR STARSHIPS ========================================================================
                    : <MainWrapper title={starShipData.name} linkArrowLeft="/products/starships" classContent="card">
                        <div className="card__item">
                            <p className='card__item-img'>
                                <img src={memoStarShipImg} alt="Star Wars character image" />
                            </p>
                            <div>
                                <ul className='card__item-content'>
                                    <li className="card__item-title">{`${starShipData.name}`}</li>
                                    <li className="product__item-descr">{`Model: ${starShipData.model}`}</li>
                                    <li className="product__item-descr">{`Cost: ${starShipData.cost_in_credits} credits`}</li>
                                </ul>
                                <br />
                                <ShowInfo infoApiUrl={starShipData.films} />

                                <p className="card__item-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolorum quisquam, quod quae nostrum obcaecati hic qui ducimus atque rerum, perferendis facilis neque praesentium sequi dolor officiis. Perferendis, praesentium possimus!</p>
                                <button onClick={onAddToCart} className={!isItemAdded ? "card__item-button" : "card__item-button card__item-button--added"}>{!isItemAdded ? 'Add to cart' : 'Added'}</button>
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