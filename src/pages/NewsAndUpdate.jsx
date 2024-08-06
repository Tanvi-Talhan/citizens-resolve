import React from 'react';
import news1 from "../assets/News/news1.jpg"
import news_2 from "../assets/News/news_2.jpeg"
import news_3 from "../assets/News/news_3.jpeg"
import img2 from "../assets/News/news2.jpeg"
import img3 from "../assets/News/news3.jpeg"
import img4 from "../assets/News/news4.jpeg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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
          {/* Big Card */}
          <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-1">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper flex w-full rounded-lg mb-4"
            >
              <SwiperSlide>
                <img src={news1} alt="news 3" className="w-full border-4 border-black rounded-lg mb-4" />
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
                    The Heritage Walk organized by NMC as part of Nagpur@2025 was a successful event, with Atharva Shivankar providing fascinating insights into the city's history. The performance by renowned musicians added to the experience, and the initiative's leaders shared their vision for Nagpur's transformation. Nagpur@2025 continues to work towards creating a better future for the city through collaborative efforts and sustainable initiatives.</p>
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

                    The minister held a meeting at his residence, attended by officials from various departments, including Municipal Commissioner Dr. Abhijit Chaudhary and NIT Chairman Manoj Kumar Suryavanshi.During the meeting, a range of key issues and projects were discussed, including the Vegetable and Mutton Market, Gokulpeth Market’s architectural design, Netaji Market, Flower Market, Cotton Market, Yashwant Stadium, Crazy Castle, Dick Clinic, playgrounds, and the appointment of a Project Management Consultant. The review also extended to the Mahal’s Budhwar Bazaar, where Gadkari emphasized the need to accelerate legal proceedings. The minister stressed the importance of establishing a well-equipped market for the benefit of retail traders and individuals dependent on the vegetable and mutton market.                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={news_3} alt="Trending Gadget 4" className="w-full border-4 border-black rounded-lg mb-4" />
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

                    An officer in the NMC's Pench Project said that the expansion of the STP will be done on the condition if National Thermal Power Corporation agrees to purchase the treated water for its Mouda plant.                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
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
            <h3 className="text-lg font-bold mb-2">NMC felicitates Brand Ambassadors of Swachh Bharat Abhiyan in Nagpur</h3>
            <p className="text-gray-600 text-sm">October 4, 2022 <span className="text-gray-400">&nbsp;DemoAdmin</span>Radhakrishnan B, Commissioner and Administrator of Nagpur Municipal Corporation, said that NMC is making a lot of efforts to spread the message of cleanliness to every household. Everyone needs to come together to make Nagpur city clean and beautiful. He appealed to create a cleanliness movement through public participation to bring Nagpur to the top position in the ranking of clean and beautiful cities.

              On the occasion of Swachh Bharat Abhiyan at the Raghuji Raje Bhosale Nagar Bhavan (Town Hall) of the NMC at Mahal, the Brand Ambassadors of Swachh Bharat Abhiyan Nagpur were felicitated. Also the prizes were distributed to the winners of various competitions organized during Ganeshotsav. The representatives of various NGOs who cooperated in Ganeshotsav were felicitated at the hands of the Municipal Commissioner.</p>
          </div>

          {/*<div className="bg-white rounded-lg shadow-md p-4">
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
          </div>*/}
        </div>
      </div>
    </main>
  );
};

export default NewsPortal;
