// src/CardContainer.jsx
import React from 'react';
import Cards from '../components/Cards';

const teamMembers = [
  {
    name: 'Tanvi',
    title: 'UX/UI Designer',
    image: 'src/assets/images/tanvi.jpg',
  },
  {
    name: 'Sanjana Mankar',
    title: 'Web Developer',
    image: 'src/assets/images/sanjana1.png',
  },
  {
    name: 'Piyush Falke',
    title: 'Software Engineer',
    image: 'src/assets/images/piyush1.png',
  },
  {
    name: 'Vaibhav Kondhekar',
    title: 'Project Manager',
    image: 'src/assets/images/vaibhav.jpg',
  },
  {
    name: 'Samiksha Mogre',
    title: 'Graphic Designer',
    image: 'src/assets/images/samiksha.jpg',
  },
];

const AboutUs = () => {
   return (
    <section className="bg-[#669bbc] py-12">
    <div className="container mx-auto px-6 bg-[#669bbc]">
      <h2 className="text-4xl font-bold text-center text-white">Meet Our Team</h2>
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
