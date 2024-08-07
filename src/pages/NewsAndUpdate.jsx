import React from 'react';
import news1 from "../assets/News/news1.jpg";
import news_2 from "../assets/News/news_2.jpeg";
import news_3 from "../assets/News/news_3.jpeg";
import img2 from "../assets/News/news2.jpeg";
import img3 from "../assets/News/news3.jpeg";
import img4 from "../assets/News/news4.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';


const NewsPortal = () => {
  return (
    <main className="container mx-auto mt-8" style={{ backgroundColor: '#e0e1dd' }}>
      <div className="" style={{ backgroundColor: '#e0e1dd' }}>
        <header className="text-white py-4" style={{ backgroundColor: '#003049' }}>
          <div className="flex">
            <h1 className="ml-4 text-center text-2xl font-bold">NEWS PORTAL</h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-0">
          {/* Big Card with Swiper */}
          <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-1">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper flex w-full rounded-lg mb-4">
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

                    Flautist Shubham Chopkar, Guitarist Sanket Make, and Tabla player Sarthak Shukla presented a mesmerizing performance during the Heritage Walk. Prominent members of Nagpur@2025, including Advisor Shivkumar Rao, Convener Nimish Sutaria, CEO Malhar Deshpande, and others, were also present. Malhar Deshpande shared various activities of Nagpur@2025, and Shivkumar Rao elaborated on the vision behind the movement.

                    Nagpur@2025 is a collaborative effort by Citizens, Corporates, and NGOs led by VED Council in partnership with the local administration of Nagpur, including NMC and Nagpur Police. The initiative aims to bring together stakeholders on one platform to transform the city by identifying, implementing, and monitoring sustainable initiatives and projects. The goal is to instill pride, positivity, and ownership among citizens, making Nagpur a fantastic city to live, work, and enjoy.
                    The Heritage Walk organized by NMC as part of Nagpur@2025 was a successful event, with Atharva Shivankar providing fascinating insights into the city's history. The performance by renowned musicians added to the experience, and the initiative's leaders shared their vision for Nagpur's transformation. Nagpur@2025 continues to work towards creating a better future for the city through collaborative efforts and sustainable initiatives.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={news_2} alt="news 2" className="w-full border-4 border-black rounded-lg mb-4" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Gadget</span>
                    <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Tech</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Gadkari directs NMC, NIT to speed up development works in Nagpur</h3>
                  <p className="text-gray-600 text-sm">August 21, 2023 <span className="text-gray-400">&nbsp;GadgetPro</span></p>
                  <p className="text-gray-600 mt-2">
                    Union Minister of Road Transport and Highways, Nitin Gadkari, has issued directives to expedite the progress of multiple development projects being undertaken by the Nagpur Municipal Corporation (NMC) and Nagpur Improvement Trust (NIT) within the city.

                    The minister held a meeting at his residence, attended by officials from various departments, including Municipal Commissioner Dr. Abhijit Chaudhary and NIT Chairman Manoj Kumar Suryavanshi. During the meeting, a range of key issues and projects were discussed, including the Vegetable and Mutton Market, Gokulpeth Market’s architectural design, Netaji Market, Flower Market, Cotton Market, Yashwant Stadium, Crazy Castle, Dick Clinic, playgrounds, and the appointment of a Project Management Consultant. The review also extended to the Mahal’s Budhwar Bazaar, where Gadkari emphasized the need to accelerate legal proceedings. The minister stressed the importance of establishing a well-equipped market for the benefit of retail traders and individuals dependent on the vegetable and mutton market.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={news_3} alt="news 3" className="w-full border-4 border-black rounded-lg mb-4" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Gadget</span>
                    <span className="text-white px-2 py-1 rounded-md text-sm" style={{ backgroundColor: '#003049' }}>Tech</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">NMC plans to treat additional 100 MLD of sewage water</h3>
                  <p className="text-gray-600 text-sm">October 7, 2018 <span className="text-gray-400">&nbsp;Innovator</span></p>
                  <p className="text-gray-600 mt-2">
                    Taking into account the rising population of Nagpur resulting in increased pressure on the city's sewage network, Pench Project has decided to enhance the capacity of sewage treatment plan from 200 MLD to 300 MLD.

                    Even the concessionaire (SPV) has shown interest to augment the sewage water treatment capacity of its existing plant. Now the proposal of the department will be tabled before the standing committee meeting to be held on October 9.

                    An officer in the NMC's Pench Project said that the expansion of the STP will be done on the condition if National Thermal Power Corporation agrees to purchase the treated water for its Mouda plant.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Small Cards */}
        <div className="w-full lg:w-1/3 grid grid-cols-1 gap-4">
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
