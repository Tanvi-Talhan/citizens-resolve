import React from 'react';
import Card from './Card';

const cards = [
    { image: 'src/assets/images/water-drop.png', text: 'Water Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/flash_on_100dp_5F6368_FILL0_wght400_GRAD0_opsz48.png', text: 'Electricity Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/road-with-broken-line.png', text: 'Road Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/health_and_safety_100dp_5F6368_FILL0_wght400_GRAD0_opsz48.png', text: 'Health Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/warning.png', text: 'Traffic Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/property.png', text: 'Residential Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/save-the-planet.png', text: 'Environmental Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/social-care.png', text: 'Social Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/administrative.png', text: 'Administrative Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/light-bulb.png', text: 'Educational Issue', buttonText: 'Click Me' },
];

const GovernmentAction = () => {
    return (
        <>
        <h1 className='text-center font-bold text-2xl h-10 bg-[#780000] text-orange-200'>Report Your Issue Here....  </h1>
        <div className=" p-4 flex justify-center items-center">
            <div className="grid grid-cols-4 gap-4 space-x-4" >
                {cards.map((card, index) => (
                <Card key={index} image={card.image} text={card.text} buttonText={card.buttonText} />
                ))}
            </div>
        </div>
        </>
    );
};

export default GovernmentAction;
