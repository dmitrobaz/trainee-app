import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, MainWrapper, MyLoader, PeopleCard } from '../components';
import { imagesPeopleBig, imagesStarShipsBig } from '../assets/img';


import { useLocation } from 'react-router-dom';
import { addPeopleToCart } from '../redux/actions/addPeopleToCart';
import { addStarShipsToCart } from '../redux/actions/addStarShipsToCart';
import { axiosPeopleDataRequest, axiosStarShipsDataRequest } from '../redux/actions/setItemsToSore';



const CardPage: React.FC = () => {
    const [statusRequst, setStatusRequest] = useState<boolean>(false)

    const dispatch = useDispatch()

    const id = Number(useLocation().search.split('=')[1]) - 1
    const typeCardPage = useLocation().pathname

    const itemsDataFromRedux: any = useSelector(({ itemDataBase }: any) => itemDataBase)

    const CardDescr = useSelector(({ itemDataBase }: any) => itemDataBase.people.data.results[id])
    const StarShipCardData = useSelector(({ itemDataBase }: any) => itemDataBase.starships.data.results[id])

    useEffect(() => {
        if (!('data' in itemsDataFromRedux.starships) || !('data' in itemsDataFromRedux.starships)) {
            Promise.all([
                dispatch(axiosStarShipsDataRequest()),
                dispatch(axiosPeopleDataRequest())
            ]).then(() => setStatusRequest(true))
            return
        }
        setStatusRequest(true)

    }, [])

    const clickHandler = () => {
        console.log('click');

    }

    const onAddToCart = () => {
        typeCardPage.includes('people')
            ? dispatch(addPeopleToCart({ data: CardDescr, type: 'people' }))
            : dispatch(addStarShipsToCart({ data: StarShipCardData, type: 'starships' }))


    }
    return (
        <>
            <Header />
            {statusRequst
                ? <>
                    {typeCardPage.includes('people')
                        ? <MainWrapper title={CardDescr.name} onClick={clickHandler} link="/products/people" classContent="card">
                            <div className="card__item">
                                <p className='card__item-img'>
                                    <img src={`${imagesPeopleBig[Math.floor(Math.random() * imagesPeopleBig.length)].default}`} alt="Star Wars character image" />
                                </p>
                                <div>
                                    <ul className='card__item-content'>
                                        <li className="card__item-title">{`${CardDescr.name}`}</li>
                                        <li className="card__item-descr">{`Gender: ${CardDescr.gender}`}</li>
                                        <li className="card__item-descr">{`Height: ${CardDescr.height}`}</li>
                                        <li className="card__item-descr">{`Mass: ${CardDescr.mass}`}</li>
                                        <li className="card__item-descr">{`Skin color: ${CardDescr.skin_color}`}</li>
                                        <li className="card__item-descr">{`Eye color: ${CardDescr.eye_color}`}</li>
                                    </ul>
                                    <p className="card__item-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolorum quisquam, quod quae nostrum obcaecati hic qui ducimus atque rerum, perferendis facilis neque praesentium sequi dolor officiis. Perferendis, praesentium possimus!</p>

                                    <button onClick={onAddToCart} className="card__item-button">Add to cart</button>
                                </div>
                            </div>
                        </MainWrapper>

                        : <MainWrapper title={StarShipCardData.name} onClick={clickHandler} link="/products/people" classContent="card">
                            <div className="card__item">
                                <p className='card__item-img'>
                                    <img src={`${imagesStarShipsBig[Math.floor(Math.random() * imagesStarShipsBig.length)].default}`} alt="Star Wars character image" />
                                </p>
                                <div>
                                    <ul className='card__item-content'>
                                        <li className="card__item-title">{`${StarShipCardData.name}`}</li>
                                        <li className="product__item-descr">{`Model: ${StarShipCardData.model}`}</li>
                                        <li className="product__item-descr">{`Cost: ${StarShipCardData.cost_in_credits} credits`}</li>
                                    </ul>
                                    <p className="card__item-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolorum quisquam, quod quae nostrum obcaecati hic qui ducimus atque rerum, perferendis facilis neque praesentium sequi dolor officiis. Perferendis, praesentium possimus!</p>

                                    <button onClick={onAddToCart} className="card__item-button">Add to cart</button>
                                </div>
                            </div>
                        </MainWrapper>}
                </>
                : <MyLoader />
            }
        </>

    );
};

export default CardPage;