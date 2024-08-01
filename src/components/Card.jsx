import React from 'react';

const Card = ({ image, text }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-full shadow-lg p-4">
      <img src={image} alt={text} className="w-24 h-24 rounded-full mb-2" />
      <p>{text}</p>
    </div>
  );
};

export default Card;
