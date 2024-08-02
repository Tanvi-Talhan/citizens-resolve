import React from 'react';
import Card from './Card';

const cards = [
    { image: 'https://via.placeholder.com/150', text: 'Water Issue', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Electricity Issue', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Road Issue', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Health Issue', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Traffic Issue', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Residential Issue', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Environmental Issue', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Social Issue', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: ' Issue', buttonText: 'Click Me' },
    { image: 'https://via.placeholder.com/150', text: 'Card Issue', buttonText: 'Click Me' },
];

const GovernmentAction = () => {
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

export default GovernmentAction;
