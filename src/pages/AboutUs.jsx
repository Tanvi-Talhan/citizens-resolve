// src/CardContainer.jsx
import React from 'react';
import Cards from '../components/Cards';

const teamMembers = [
  {
    name: 'Mandy Reynolds',
    title: 'UX/UI Designer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Samuel Hardy',
    title: 'Web Developer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Tom Sunderland',
    title: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    title: 'Project Manager',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Alice Johnson',
    title: 'Graphic Designer',
    image: 'https://via.placeholder.com/150',
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About US</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <Cards {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
