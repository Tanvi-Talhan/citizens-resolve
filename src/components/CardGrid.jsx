import React from 'react';
import Card from './Card';

const cards = [
  { image: 'https://via.placeholder.com/150', text: 'Card 1' },
  { image: 'https://via.placeholder.com/150', text: 'Card 2' },
  { image: 'https://via.placeholder.com/150', text: 'Card 3' },
  { image: 'https://via.placeholder.com/150', text: 'Card 4' },
  { image: 'https://via.placeholder.com/150', text: 'Card 5' },
  { image: 'https://via.placeholder.com/150', text: 'Card 6' },
  { image: 'https://via.placeholder.com/150', text: 'Card 7' },
  { image: 'https://via.placeholder.com/150', text: 'Card 8' },
  { image: 'https://via.placeholder.com/150', text: 'Card 9' },
  { image: 'https://via.placeholder.com/150', text: 'Card 10' },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} text={card.text} />
      ))}
    </div>
  );
};

export default CardGrid;
