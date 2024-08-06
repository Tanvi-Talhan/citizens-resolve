import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules/navigation';
import 'swiper/swiper-bundle.css'; // Import Swiper CSS

import news1 from "../assets/News/news1.jpg";
import news_2 from "../assets/News/news_2.jpeg";
import news_3 from "../assets/News/news_3.jpeg";
import img2 from "../assets/News/news2.jpeg";
import img3 from "../assets/News/news3.jpeg";
import img4 from "../assets/News/news4.jpeg";

const NewsPortal = () => {
  return (
    <main className="container mx-auto mt-8" style={{ backgroundColor: '#e0e1dd' }}>
      <div style={{ backgroundColor: '#e0e1dd' }}>
        <header className="text-white py-4" style={{ backgroundColor: '#003049' }}>
          <div className="flex">
            <h1 className="ml-4 text-center text-2xl font-bold">NEWS PORTAL</h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-0">
          <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-1">
            <Swiper
              // navigation={true}
              // modules={[Navigation]}
              className="mySwiper flex w-full rounded-lg mb-4"
            >
              <SwiperSlide>
                <img src={news1} alt="news 1" className="w-full border-4 border-black rounded-lg mb-4" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Gadget</span>
                    <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Tech</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">NMC Organizes Heritage Walk with Nagpur@2025 Initiative led by Atharva Shivankar</h3>
                  <p className="text-gray-600 text-sm">April 14, 2023 <span className="text-gray-400">&nbsp;DemoAdmin</span></p>
                  <p className="text-gray-600 mt-2">
                    The Nagpur Municipal Corporation (NMC) recently organized a Heritage Walk at Chitnavis Wada, Mahal, as part of the Nagpur@2025 initiative. The walk was led by Atharva Shivankar, a young history and heritage enthusiast, and saw participation from over 50 citizens. Atharva shared fascinating stories about Nagpur's origin and Chitnavis family's history, providing unique insights into the city's heritage.
                    {/* Continue with the rest of the content */}
                  </p>
                </div>
              </SwiperSlide>
              {/* Add other SwiperSlides */}
            </Swiper>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={img2} alt="Best New Phone" className="w-full rounded-lg mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Lifestyle</span>
            </div>
            <h3 className="text-lg font-bold mb-2">NMC sets up 350 artificial tanks for Ganesh idol visarjan in Nagpur</h3>
            <p className="text-gray-600 text-sm">January 12, 2022 <span className="text-gray-400">&nbsp;TechGuru</span></p>
            <p className="text-gray-600 mt-2">
              The Nagpur Municipal Corporation (NMC) has established around 350 artificial tanks across the city to facilitate the immersion (visarjan) of Ganesh idols during the Ganesh Chaturthi festival. This initiative aims to promote eco-friendly practices and reduce the environmental impact of traditional idol immersions in natural water bodies. The artificial tanks are strategically placed in various localities to ensure easy access for citizens, and the NMC has made arrangements for their maintenance and cleanliness during the festival period.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={img3} alt="Trending Gadget 5" className="w-full rounded-lg mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Entertainment</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Nagpur’s tallest residential complex 'Silver Heights' set for inauguration</h3>
            <p className="text-gray-600 text-sm">February 3, 2021 <span className="text-gray-400">&nbsp;HomeTech</span></p>
            <p className="text-gray-600 mt-2">
              Nagpur's tallest residential complex, 'Silver Heights,' is set for inauguration. The project, developed by XYZ Developers, features state-of-the-art amenities, including a rooftop swimming pool, a fully equipped gym, and a multi-purpose hall. The inauguration ceremony will be attended by notable personalities from the real estate industry and local dignitaries. The project aims to redefine luxury living in Nagpur, offering residents a blend of modern design and comfortable living spaces.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={img4} alt="Trending Gadget 6" className="w-full rounded-lg mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Business</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Nagpur Metro Phase 2: Expanding the City’s Public Transport Network</h3>
            <p className="text-gray-600 text-sm">November 14, 2019 <span className="text-gray-400">&nbsp;UrbanPlanner</span></p>
            <p className="text-gray-600 mt-2">
              The Nagpur Metro is set to embark on Phase 2 of its expansion project, aimed at extending the city's public transport network. The new phase will include additional metro lines and stations, connecting more areas of the city and providing a convenient and efficient mode of transportation for Nagpur's residents. The project is expected to boost the city's infrastructure and promote sustainable urban development.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsPortal;
