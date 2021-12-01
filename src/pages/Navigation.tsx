import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {

    return (
        <div className='main-page'>
            <h1>Naviagation page</h1>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Login</Link>
            <Link to="/products">Products</Link>


        </div>
    );
}

export default Main;
