import React, { useState } from 'react';
import { RiPlantFill } from 'react-icons/ri';
import { FaFire, FaAmbulance, FaPlane, FaRegFileAlt, FaExclamationTriangle } from 'react-icons/fa'; // for react icons

const guidelines = [
  {
    title: 'Environmental Safety',
    description: 'Guidelines for pollution control and dealing with natural disasters.',
    icon: <RiPlantFill />,
    link: '#environmental-safety',
    details: 'Detailed guidelines for pollution control, including reducing emissions, proper waste disposal, and dealing with natural disasters such as floods, earthquakes, and storms.',
    pdfFile: 'src/assets/pdf/1.pdf',
  },
  {
    title: 'Fire Safety',
    description: 'Tips for fire prevention, what to do during a fire, and post-fire actions.',
    icon: <FaFire />,
    link: '#fire-safety',
    details: 'Detailed tips for fire prevention, including installing smoke detectors, having fire extinguishers, and creating a fire escape plan. Instructions on what to do during a fire and post-fire actions.',
    pdfFile: 'src/assets/pdf/2.pdf',
  },
  {
    title: 'Accident Prevention',
    description: 'Road safety, workplace safety, and home safety guidelines.',
    icon: <FaAmbulance />,
    link: '#accident-prevention',
    details: 'Detailed guidelines for road safety, workplace safety, and home safety. Tips include wearing seat belts, following traffic rules, using safety gear at the workplace, and preventing common household accidents.',
    pdfFile: 'src/assets/pdf/3.pdf',
  },
  {
    title: 'Travel Safety',
    description: 'Before traveling, during travel, and emergency contact tips.',
    icon: <FaPlane />,
    link: '#travel-safety',
    details: 'Detailed travel safety tips, including pre-travel preparations, safety measures during travel, and emergency contact information. Tips for safe international travel and dealing with travel-related emergencies.',
    pdfFile: 'src/assets/pdf/4.pdf',
  },
  {
    title: 'Government Policies',
    description: 'Overview of relevant government policies and regulations.',
    icon: <FaRegFileAlt />,
    link: '#government-policies',
    details: 'Overview of government policies and regulations related to safety, including environmental laws, fire safety regulations, and travel advisories. How to stay updated with policy changes.',
    pdfFile: 'src/assets/pdf/5.pdf',
  },
  {
    title: 'Emergency Procedures',
    description: 'Steps to follow during different types of emergencies.',
    icon: <FaExclamationTriangle />,
    link: '#emergency-procedures',
    details: 'Detailed emergency procedures for various situations such as natural disasters, fires, accidents, and health emergencies. Steps to take before, during, and after an emergency.',
    pdfFile: 'src/assets/pdf/6.pdf',
  },
];

const GuidelinesAndSafety = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleReadMore = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
        <div className="container max-w-screen-xl mx-auto p-4" style={{ backgroundColor: '#669bbc' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center rounded-md shadow-md transition-all duration-300"
                style={{
                  height: activeIndex === index ? 'auto' : '300px',
                  backgroundColor: '#edf6f9', // card outer color
                }}
              >
                <div className="text-3xl sm:text-4xl mb-4 mt-6">
                  {guideline.icon}
                </div>
                <h2 className={`text-xl sm:text-2xl font-semibold mb-2 ${activeIndex === index ? 'text-black' : 'text-black'}`}>
                  {guideline.title}
                </h2>
                <p className={`text-sm sm:text-base mb-4 text-center ${activeIndex === index ? 'text-black' : 'text-black'}`}>
                  {guideline.description}
                </p>
                <div className="mt-auto mb-4">
                  <button
                    onClick={() => handleReadMore(index)}
                    className="inline-block px-4 py-2 sm:px-6 sm:py-2 text-white rounded hover:bg-sky-500 hover:text-white transition"style={{background:'#003049'}}
                  >
                    {activeIndex === index ? 'Show Less' : 'Read More'}
                  </button>
                  <a
                    href={guideline.pdfFile}
                    download
                    className="inline-block px-4 py-2 sm:px-6 sm:py-2 ml-2 text-white rounded hover:bg-sky-500 hover:text-white transition"style={{background:'#003049'}}
                  >
                    Get PDF
                  </a>
                </div>
                {activeIndex === index && (
                  <div className="w-full text-left p-4 mt-4 rounded-b-md shadow-md">
                    <p className="text-sm sm:text-base text-black">{guideline.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
  );
};

export default GuidelinesAndSafety;
