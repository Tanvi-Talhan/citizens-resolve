import React from 'react';

const guidelines = [
  {
    title: 'Environmental Safety',
    description: 'Guidelines for pollution control, conservation, and dealing with natural disasters.',
    icon: '🌳', // Replace with appropriate icons
    link: '#environmental-safety'
  },
  {
    title: 'Fire Safety',
    description: 'Tips for fire prevention, what to do during a fire, and post-fire actions.',
    icon: '🔥', // Replace with appropriate icons
    link: '#fire-safety'
  },
  {
    title: 'Accident Prevention',
    description: 'Road safety, workplace safety, and home safety guidelines.',
    icon: '🚑', // Replace with appropriate icons
    link: '#accident-prevention'
  },
  {
    title: 'Travel Safety',
    description: 'Before traveling, during travel, and emergency contact tips.',
    icon: '✈️', // Replace with appropriate icons
    link: '#travel-safety'
  },
  {
    title: 'Government Policies',
    description: 'Overview of relevant government policies and regulations.',
    icon: '📜', // Replace with appropriate icons
    link: '#government-policies'
  },
  {
    title: 'Emergency Procedures',
    description: 'Steps to follow during different types of emergencies.',
    icon: '🚨', // Replace with appropriate icons
    link: '#emergency-procedures'
  },
];

const Guidelines = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Guidelines & Safety Tips</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guidelines.map((guideline, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-6xl mb-4">{guideline.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{guideline.title}</h2>
            <p className="text-gray-700 mb-4">{guideline.description}</p>
            <a href={guideline.link} className="text-blue-500 hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guidelines;
