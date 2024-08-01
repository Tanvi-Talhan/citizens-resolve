import React, { useState } from 'react';
import { RiPlantFill } from "react-icons/ri";

const guidelines = [
  {
    title: 'Environmental Safety',
    description: 'Guidelines for pollution control and dealing with natural disasters.',
    icon: <RiPlantFill />
    ,
    link: '#environmental-safety',
    details: 'Detailed guidelines for pollution control, including reducing emissions, proper waste disposal, and dealing with natural disasters such as floods, earthquakes, and storms.'
  },
  {
    title: 'Fire Safety',
    description: 'Tips for fire prevention, what to do during a fire, and post-fire actions.',
    icon: '🔥',
    link: '#fire-safety',
    details: 'Detailed tips for fire prevention, including installing smoke detectors, having fire extinguishers, and creating a fire escape plan. Instructions on what to do during a fire and post-fire actions.'
  },
  {
    title: 'Accident Prevention',
    description: 'Road safety, workplace safety, and home safety guidelines.',
    icon: '🚑',
    link: '#accident-prevention',
    details: 'Detailed guidelines for road safety, workplace safety, and home safety. Tips include wearing seat belts, following traffic rules, using safety gear at the workplace, and preventing common household accidents.'
  },
  {
    title: 'Travel Safety',
    description: 'Before traveling, during travel, and emergency contact tips.',
    icon: '✈️',
    link: '#travel-safety',
    details: 'Detailed travel safety tips, including pre-travel preparations, safety measures during travel, and emergency contact information. Tips for safe international travel and dealing with travel-related emergencies.'
  },
  {
    title: 'Government Policies',
    description: 'Overview of relevant government policies and regulations.',
    icon: '📜',
    link: '#government-policies',
    details: 'Overview of government policies and regulations related to safety, including environmental laws, fire safety regulations, and travel advisories. How to stay updated with policy changes.'
  },
  {
    title: 'Emergency Procedures',
    description: 'Steps to follow during different types of emergencies.',
    icon: '🚨',
    link: '#emergency-procedures',
    details: 'Detailed emergency procedures for various situations such as natural disasters, fires, accidents, and health emergencies. Steps to take before, during, and after an emergency.'
  },
];

const Guidelines = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleReadMore = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-500">Guidelines & Safety Tips</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12">
        {guidelines.map((guideline, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center rounded-md shadow-md transition-all duration-300 ${activeIndex === index ? 'bg-black' : 'bg-black'
              }`}
            style={{ height: activeIndex === index ? 'auto' : '300px' }}
          >
            <div className="text-4xl mb-4 mt-6">
              {guideline.icon}
            </div>
            <h2 className={`text-2xl font-semibold mb-2 ${activeIndex === index ? 'text-white' : 'text-white'}`}>
              {guideline.title}
            </h2>
            <p className={`text-base mb-4 text-center ${activeIndex === index ? 'text-white' : 'text-white'}`}>
              {guideline.description}
            </p>
            <div className="mt-auto">
              <button
                onClick={() => handleReadMore(index)}
                className="inline-block px-6 py-2 mb-10 bg-green-600 text-white rounded hover:bg-blue-400 hover:text-black transition"
              >
                {activeIndex === index ? 'Show Less' : 'Read More'}
              </button>
            </div>
            {activeIndex === index && (
              <div className="w-full bg-gray-300 text-left p-4 mt-4 rounded-b-md shadow-md">
                <p className="text-base text-black">{guideline.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guidelines;
