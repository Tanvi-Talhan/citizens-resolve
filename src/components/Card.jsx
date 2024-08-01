import React from 'react';

const Card = ({ image, text, buttonText }) => {
  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-full shadow-lg p-4">
        <img src={image} alt={text} className="w-24 h-24 rounded-full mb-2" />
        <p className="mb-2">{text}</p>
        <button className="bg-blue-500 text-white rounded px-4 py-2">{buttonText}</button>
      </div>
    </>
  );
};

export default Card;
