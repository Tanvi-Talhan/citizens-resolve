import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import image from "../assets/logo.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import image5 from "../assets/home-carousel/1.png";
import image6 from "../assets/home-carousel/2.png";
import image7 from "../assets/home-carousel/3.png";
import image8 from "../assets/home-carousel/4.png";

function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="min-h-screen flex flex-col md:grid md:grid-cols-12">
                {/* Sidebar */}
                <aside className={`col-span-2 bg-[#e0e1dd] text-black flex flex-col md:sticky md:top-0 h-screen md:h-auto z-20 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
                    <div className="flex  mt-5 ">
                        <img src={image} alt="Citizen Resolve Logo" className="h-32 w-32 " />
                    </div>
                    <nav className="flex flex-col mt-5 px-5">
                        <Link to="/" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Home</Link>
                        <Link to="/report-issue" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Report Issue</Link>
                        <Link to="/issue-tracker" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Issue Tracker</Link>
                        <Link to="/government-action" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Government Action</Link>
                        <Link to="/news-and-update" className="p-2 hover:bg-[#003049] hover:text-white font-bold">News and Update</Link>
                        <Link to="/guidelines-and-safety-tips" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Guidelines and Safety Tips</Link>
                        <Link to="/user-profile" className="p-2 hover:bg-[#003049] hover:text-white font-bold">User Profile</Link>
                        <Link to="/faq" className="p-2 hover:bg-[#003049] hover:text-white font-bold">FAQ</Link>
                        <Link to="/feedback-and-suggestion" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Feedback and Suggestion</Link>
                        <Link to="/about-us" className="p-2 hover:bg-[#003049] hover:text-white font-bold">About Us</Link>
                        <Link to="/team-and-support" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Team and Support</Link>
                        <Link to="/Login" className="p-2 hover:bg-[#003049] hover:text-white font-bold"><Login></Login>t</Link>
                    </nav>
                </aside>

                {/* Main content */}
                <div className="col-span-10 flex flex-col">
                    {/* Navbar */}
                    <nav className="w-full h-14 z-10 sticky top-0 flex items-center justify-between px-4 md:px-0" style={{ backgroundColor: "#003049" }}>
                        <button
                            className="text-white md:hidden"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            {sidebarOpen ? 'Close' : 'Menu'}
                        </button>
                        <Breadcrumb />
                    </nav>

                    {/* Main content with Swiper */}
                    <main className="flex-grow flex bg-cover bg-no-repeat ">
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper flex w-full"
                        >
                            <SwiperSlide>
                                <img src={image6} alt="image" className="border-4 border-black" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={image5} alt="image" className="border-4 border-black" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={image7} alt="image" className="border-4 border-black" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={image8} alt="image" className="border-4 border-black" />
                            </SwiperSlide>
                        </Swiper>
                    </main>

                    {/* Footer */}
                    <footer className="w-full text-white py-4" style={{ backgroundColor: "#003049" }}>
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div>
                                    <h2 className="text-lg font-bold mb-2 leading-7">Contact Us</h2>
                                    <p>Email: contact@citizenresolve.com</p>
                                    <p>Phone: +123 456 7890</p>
                                    <p>Address: 123 Citizen Resolve Street, City, Country</p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                                    <ul className="leading-relaxed flex space-x-8">
                                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
                                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
                                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Home;
