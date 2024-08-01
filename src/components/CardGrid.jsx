import React from 'react';
import Card from './Card';

const cards = [
    { image: 'https://via.placeholder.com/150', text: 'Water Issue', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Elect', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Card 3', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Card 4', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Card 5', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Card 6', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Card 7', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Card 8', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Card 9', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Card 10', buttonText: 'Click Me' },
];

const CardGrid = () => {
    return (
        <>
        <div className='text-center font-bold text-2xl'>Goverment______________</div>
            <div className="grid grid-cols-3 gap-4 p-4">
                {cards.map((card, index) => (
                    <Card key={index} image={card.image} text={card.text} buttonText={card.buttonText} />
                ))}
            </div>
        </>
    );
};

export default CardGrid;
