import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { addStarShipsToCart } from '../redux/actions/app';



interface IStarShipsCard {
    img: string,
    currentCardData: {
        [name: string]: any
    },
    styleCard: boolean
}

const StarShipsCard: React.FC<IStarShipsCard> = ({ currentCardData, img, styleCard }) => {
    const [isItemAdded, setIsItemAdded] = useState<boolean>(false)

    const starshipsData = useSelector(({ app }: any) => app.cart.starships)
    
    const isItemExistInStore = starshipsData.starShipTotalCount && Object.keys(starshipsData).slice(0, -1).some((item: string) => item === currentCardData.url.split('/')[5])

    console.log(isItemExistInStore);

    const parseDataFromLS = (localStorage: any) => JSON.parse(localStorage)

    const dispatch = useDispatch()

    const starShipId = currentCardData.url.split('/')[5]

    const memoImg = useMemo(() => {
        return img
    }, [])

    useEffect(() => {

    }, [])

    const clickHandler = () => {
        setIsItemAdded(true)
        dispatch(addStarShipsToCart({ data: currentCardData, id: starShipId }))

        const currentPeopleDataFromLS = parseDataFromLS(localStorage.getItem('starShipCardsData'))

        if (currentPeopleDataFromLS === null || currentPeopleDataFromLS === []) {
            localStorage.setItem('starShipCardsData', JSON.stringify([currentCardData]))
            return
        }
        if (currentPeopleDataFromLS !== null || currentPeopleDataFromLS !== []) {
            localStorage.setItem('starShipCardsData', JSON.stringify([...currentPeopleDataFromLS, currentCardData]))
            return
        }
    }
    return (
        <li className='product__item'>
            <Link to={{
                pathname: "/products/starships/card",
                search: `?id=${starShipId}`
            }}></Link >
            <div className={styleCard ? "product__item-content-list" : "product__item-content"}>
                <p>
                    <img className="product__item-content-img" src={memoImg} alt="Space ship image" />
                </p>
                <section>
                    <h4>{`${currentCardData.name}`}</h4>
                    <ul className={styleCard ? 'product__item-currentCardData-list' : ''}>
                        <li className="product__item-currentCardData">{`Model: ${currentCardData.model}`}</li>
                        <li className="product__item-currentCardData">{`Cost: ${currentCardData.cost_in_credits} credits`}</li>
                    </ul>
                    <button onClick={clickHandler} className="product__item-button">{!isItemAdded ? 'Add to cart' : 'Added'}</button>

                </section>
            </div>
        </li>
    );
};

export default StarShipsCard;