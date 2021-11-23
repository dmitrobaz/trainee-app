import React from 'react';

interface ICardProps {
    typeCard: string
}

const Card: React.FC<ICardProps> = ({ typeCard }) => {
    return (
        <main className='product'>
            <h1 className="product-title">People</h1>
            <section className='product-wrapper'>



            </section>

        </main>
    );
};

export default Card;