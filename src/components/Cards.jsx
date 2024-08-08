// src/Card.jsx
import React from 'react';

const Cards = ({ name, title, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto mt-10">
      <div className="flex justify-center mt-4">
        <img
          className="w-32 h-32 rounded-full object-cover"
          src={image}
          alt={`${name}'s profile`}
        />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-4">{title}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Cards;
