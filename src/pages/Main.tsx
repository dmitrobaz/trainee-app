import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {

    return (
        <div className='main-page'>
            <h1>Main page</h1>
            <Link to="/login">Log in</Link>
        </div>
    );
}

export default Main;
