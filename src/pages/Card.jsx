import React from 'react';
import img from '../assets/images/water-drop.png';

const Card = ({ image, text, buttonText }) => {
  return (
    <div className="relative flex flex-col m-11 items-center justify-center rounded-full shadow-2xl p-3 w-48 h-48 bg-transparent overflow-hidden transition-transform transform hover:scale-105 hover:bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="mb-2 mt-8 text-black text-xl font-bold">{text}</p>
        <button className="bg-orange-500 hover:bg-green-500 text-white rounded-full px-2 py-1">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
