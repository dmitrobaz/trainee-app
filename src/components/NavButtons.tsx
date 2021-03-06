import React from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";

import { FiArrowLeft, FiList, FiLogOut, FiSquare } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../redux/actions/app';

interface INavButtonProps {
    view: boolean,
    onClick: () => void,
    linkArrowLeft?: string

}

const NavButtons: React.FC<INavButtonProps> = ({ onClick, view, linkArrowLeft }) => {
    const dispatch: (obj: object) => void = useDispatch();

    const history = useHistory()
    const location = useLocation()
    const logOut = () => {
        dispatch(setAuthenticated(false))
    }

    return (
        <div>
            {linkArrowLeft && <Link to={linkArrowLeft}><FiArrowLeft /></Link>}



            {(location.pathname === "/products/people" || location.pathname === "/products/starships") &&
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