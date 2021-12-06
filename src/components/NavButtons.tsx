import React from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";

import { FiArrowLeft, FiList, FiLogOut, FiSquare, FiX } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { setAuthenticated } from '../redux/actions/app/states';

interface INavButtonProps {
    view: boolean,
    onClick: () => void,
    linkArrowLeft?: string,
    closePopup?: any

}

const NavButtons: React.FC<INavButtonProps> = ({ onClick, view, linkArrowLeft, closePopup }) => {
    const dispatch: (obj: object) => void = useDispatch();

    const history = useHistory()
    const location = useLocation()
    const logOut = () => {
        dispatch(setAuthenticated(false))
    }

    return (
        <div>
            {closePopup && <button onClick={closePopup} ><FiX /></button>}

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