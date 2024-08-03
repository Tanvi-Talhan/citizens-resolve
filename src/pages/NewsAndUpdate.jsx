import React from 'react';
import img1 from '../assets/News/1.jpg';

const NewsPortal = () => {
  return (
    <div className="bg-gray-100">
      <header className="text-white py-4"style={{ backgroundColor: '#780000' }}>
        <div className="flex">
          <h1 className="ml-4 text-center text-2xl font-bold">NEWS PORTAL</h1>
        </div>
      </header>

      <main className="container mx-auto mt-8 bg-orange-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-0">
          {/* Big Card */}
          <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-1">
          <img src={img1} alt="img1" className="w-full rounded-lg mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-white px-2 py-1 rounded-md text-sm"style={{ backgroundColor: '#780000' }}>Gadget</span>
              <span className="text-white px-2 py-1 rounded-md text-sm"style={{ backgroundColor: '#780000' }}>Tech</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Trending Gadget That Simply Change Your Lifestyle</h3>
            <p className="text-gray-600 text-sm">July 17, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            <p className="text-gray-600 mt-2">Deputy Chief Minister Devendra Fadnavis announced the creation of 'Circular Economy Parks' to promote pollution-free cities and sustainable development by processing waste into valuable resources. This initiative, part of Nagpur's integrated solid waste management project, aims to leverage advanced Dutch technology for waste processing, reducing environmental impact and generating by-products like biogas and compost. The project, supported by a partnership with the Netherlands-based Sustainable Business Development company, marks a significant step towards improving Nagpur's waste management infrastructure and achieving cleaner, greener urban spaces.
</p>
          </div>

          {/* Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="/best-new-phone.jpg" alt="Best New Phone For New Lifestyle" className="w-full rounded-lg mb-4" />
              <div className="flex justify-between items-center">
                <span className="text-white px-2 py-1 rounded-md text-sm"style={{ backgroundColor: '#780000' }}>Lifestyle</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Best New Phone For New Lifestyle</h3>
              <p className="text-gray-600 text-sm">July 20, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="/art-exhibition.jpg" alt="Art Exhibition" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Art Exhibition Going To Start This Week</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="/grand-live-concert.jpg" alt="Grand Live Concert" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Grand Live Concert In Germany 2017</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="/fighter-plane-crash.jpg" alt="Fighter Plane Crash" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Fighter Plane Crash During World War</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="/art-exhibition.jpg" alt="Art Exhibition" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Art Exhibition Going To Start This Week</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="/art-exhibition.jpg" alt="Art Exhibition" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Art Exhibition Going To Start This Week</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="/grand-live-concert.jpg" alt="Grand Live Concert" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">Grand Live Concert In Germany 2017</h3>
              <p className="text-gray-600 text-sm">July 24, 2017 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="/nutritious-food.jpg" alt="Nutritious Food" className="w-full rounded-lg mb-4" />
              <div className="flex justify-between items-center">
                <span className= "text-white px-2 py-1 rounded-md text-sm"style={{ backgroundColor: '#780000' }}>Travel</span>
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
