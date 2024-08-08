import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <div className="rounded mb-2 max-w-9xl">
      <div
          className={`p-4 cursor-pointer bg-[#003049] text-white text-lg flex justify-between  text-center items-center ${isOpen ? 'rounded-t' : 'rounded'}`}
        onClick={() => setIsOpen(!isOpen)}
      > 
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
          <div className="p-4 text-lg text-black bg-[#e0e1dd]">
          {content}
        </div>
      )}
    </div>
    </>
  );
};

const FAQ = () => {
  const items = [
    { title: 'What are the functions of a Municipal Corporation?', content: 'Municipal Corporations are responsible for urban planning, sanitation, water supply, drainage, maintenance of public spaces, road construction and maintenance, public health, and education.' },
    { title: 'How can I pay my property taxes?', content: 'Property taxes can be paid online through the Municipal Corporations official website or in person at designated municipal offices.' },
    { title: 'Who do I contact for waste management services?', content: 'Waste management services are handled by the Sanitation Department. Contact details are available on the Municipal Corporation’s website.' },
    { title: 'What initiatives are being taken for urban development?', content: 'Municipal Corporations undertake various initiatives for urban development such as smart city projects, infrastructure development, beautification of public spaces, and more.' },
    { title: 'How do I apply for a building permit?', content: 'You can apply for a building permit by submitting the required documents to the municipal office or through our online portal..' },
    { title: 'How can I report a public nuisance?', content: 'You can report a public nuisance by calling our helpline number or by submitting a complaint through our website.' },
    { title: 'What health services are provided by the Municipal Corporation?', content: 'The Municipal Corporation provides primary health care services through municipal hospitals and health centers. Services include vaccinations, maternal and child health care, and disease control programs.' },
    { title: 'What are the office hours of the Municipal Corporation?', content: 'The Municipal Corporation office hours are from 9:00 AM to 5:00 PM, Monday to Friday.'}

  ];

  return (
    <>
      <div className="min-h-screen bg-[#669bbc] flex justify-center items-center">
        <div className="max-w-3xl mt-4 text-center">
          {items.map((item, index) => (
            <AccordionItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
    </div>
    </>
  );
};

export default FAQ;
