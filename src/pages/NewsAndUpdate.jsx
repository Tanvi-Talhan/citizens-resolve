import React from 'react';
import img1 from '../assets/News/1.jpg';
import img2 from '../assets/News/news2.jpeg';
import img3 from '../assets/News/news3.jpeg';
import img4 from '../assets/News/news1.jpg';
import img5 from '../assets/News/5.jpg';
import img6 from '../assets/News/6.jpg';
import img7 from '../assets/News/7.jpg';
import img8 from '../assets/News/8.jpg';

const NewsPortal = () => {
  return (
    <div className="" style={{ backgroundColor: '#e0e1dd' }}>
      <header className="text-white py-4" style={{ backgroundColor: '#003049' }}>
        <div className="flex">
          <h1 className="ml-4 text-center text-2xl font-bold">NEWS PORTAL</h1>
        </div>
      </header>

      <main className="container mx-auto mt-8" style={{ backgroundColor: '#e0e1dd' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-0">
          {/* Big Card */}
          <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-1">
            <img src={img1} alt="Trending Gadget" className="w-full rounded-lg mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Gadget</span>
              <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Tech</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Trending Gadget That Simply Change Your Lifestyle</h3>
            <p className="text-gray-600 text-sm">July 17, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            <p className="text-gray-600 mt-2">
              Deputy Chief Minister Devendra Fadnavis announced the creation of 'Circular Economy Parks' to promote pollution-free cities and sustainable development by processing waste into valuable resources. This initiative, part of Nagpur's integrated solid waste management project, aims to leverage advanced Dutch technology for waste processing, reducing environmental impact and generating by-products like biogas and compost. The project, supported by a partnership with the Netherlands-based Sustainable Business Development company, marks a significant step towards improving Nagpur's waste management infrastructure and achieving cleaner, greener urban spaces.
            </p>
          </div>

          {/* Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={img2} alt="Best New Phone" className="w-full rounded-lg mb-4" />
              <div className="flex justify-between items-center">
                <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Lifestyle</span>
              </div>
              <h3 className="text-lg font-bold mb-2">NMC sets up 350 artificial tanks for Ganesh idol visarjan in Nagpur</h3>
              <p className="text-gray-600 text-sm">August 30, 2022 <span className="text-gray-400">&nbsp;DemoAdmin</span>NMC sets up 350 artificial tanks for Ganesh idol visarjan in Nagpur</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={img3} alt="Art Exhibition" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">NMC picks up process to paint Nagpur in orange; key buildings to be colored!</h3>
              <p className="text-gray-600 text-sm">May 10, 2016 <span className="text-gray-400">&nbsp;DemoAdmin</span>NMC Mayor Praveen Datke told media that private institutions can also paint their properties in orange color as per their will. Revealing the color code, he said that the desired Orange tone can be obtained by adding 30 per cent of pink color to yellow color. He said similar formula should be applied to bring color symmetry across all the buildings and public properties.He informed that the authorities of ongoing Metro Rail project have also been informed to color the track pillars in Orange. Datke has appealed Union Transport Minister Nitin Gadkari to direct similar orders for city flyovers too.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={img4} alt="Grand Live Concert" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Grand Live Concert In Germany 2017</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={img5} alt="Fighter Plane Crash" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Fighter Plane Crash During World War</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={img6} alt="Art Exhibition" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Art Exhibition Going To Start This Week</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={img7} alt="Art Exhibition" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Art Exhibition Going To Start This Week</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={img4} alt="Grand Live Concert" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Grand Live Concert In Germany 2017</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={img8} alt="Nutritious Food" className="w-full rounded-lg mb-4" />
              <div className="flex justify-between items-center">
                <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Travel</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Nutritious Food For Healthy Life</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsPortal;
