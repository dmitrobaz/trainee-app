import React from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";

import { FiArrowLeft, FiList, FiLogOut, FiSquare, FiTrash2, FiX } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { setAuthenticated } from '../redux/actions/app/states';
import { clearCart } from '../redux/actions/app';


interface INavButtonProps {
    view: boolean,
    onClick: () => void,
    linkArrowLeft?: string,
    closePopup?: any

}

const NavButtons: React.FC<INavButtonProps> = ({ onClick, view, linkArrowLeft, closePopup }) => {
    const dispatch: (obj: any) => void = useDispatch();

    const history = useHistory()
    const location = useLocation()
    const logOut = () => {
        dispatch(setAuthenticated(false))
    }
    const onClearCart = () => {
        localStorage.removeItem('peopleCardsData')
        localStorage.removeItem('starShipCardsData')

        dispatch(clearCart())
        closePopup()
    }

    return (
        <div>
            {closePopup && <> <button onClick={onClearCart}><FiTrash2 /></button><button onClick={closePopup} ><FiX /></button></>}

            {linkArrowLeft && <Link to={linkArrowLeft}><FiArrowLeft /></Link>}



            {linkArrowLeft && (location.pathname === "/products/people" || location.pathname === "/products/starships") &&
                <button onClick={onClick}>
                    {view
                        ? <FiSquare />
                        : <FiList />
                    }
                </button>
            }

            {location.pathname === "/products" &&
                <button onClick={logOut}>
                    <FiLogOut />
                </button>
            }

        </div >
    );
};

export default NavButtons;