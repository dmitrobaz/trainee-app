import React from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";

import { FiArrowLeft, FiList, FiLogOut, FiSquare } from 'react-icons/fi';

interface INavButtonProps {
    view: boolean,
    onClick: () => void

}

const NavButton: React.FC<INavButtonProps> = ({ onClick, view }) => {
    const history = useHistory()
    const location = useLocation()
    const logOut = () => {
        history.push('/login')
    }

    return (
        <div>
            {(location.pathname !== "/products"
                && location.pathname !== "/products/people"
                && location.pathname !== "/products/starships")
                && <Link to={location.pathname === "/products/people/card"
                    ? "/products/people"
                    : "/products/starships"}><FiArrowLeft /></Link>}

            {(location.pathname === "/products/people" || location.pathname === "/products/starships") &&
                <><Link to="/products"><FiArrowLeft /></Link>
                    <button onClick={onClick}>
                        {view
                            ? <FiSquare />
                            : <FiList />}
                    </button>
                </>}

            {location.pathname === "/products" &&
                <button onClick={logOut}>
                    <FiLogOut />
                </button>}

        </div>
    );
};

export default NavButton;