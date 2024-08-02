import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import image from "../assets/logo.png";
import image2 from "../assets/bg-2.png";
import image3 from "../assets/bg-3.png";

function Home() {
    return (
        <>
            <div className="min-h-screen grid grid-cols-4">
                <aside className="col-span-1 bg-[#fdf0d5] text-black flex flex-col sticky top-0 h-screen">
                    <div className="flex justify-center mt-5">
                        <img src={image} alt="Citizen Resolve Logo" className="h-24 w-24 p-2" />
                    </div>
                    <nav className="flex flex-col mt-5 space-y-2 px-5">
                        <Link to="/" className="p-3 hover:bg-red-900 hover:text-white font-bold">Home</Link>
                        <Link to="/report-issue" className="p-3 hover:bg-red-900 hover:text-white font-bold">Report Issue</Link>
                        <Link to="/issue-tracker" className="p-3 hover:bg-red-900 hover:text-white font-bold">Issue Tracker</Link>
                        <Link to="/government-action" className="p-3 hover:bg-red-900 hover:text-white font-bold">Government Action</Link>
                        <Link to="/news-and-update" className="p-3 hover:bg-red-900 hover:text-white font-bold">News and Update</Link>
                        <Link to="/guidelines-and-safety-tips" className="p-3 hover:bg-red-900 hover:text-white font-bold">Guidelines and Safety Tips</Link>
                        <Link to="/user-profile" className="p-3 hover:bg-red-900 hover:text-white font-bold">User Profile</Link>
                        <Link to="/faq" className="p-3 hover:bg-red-900 hover:text-white font-bold">FAQ</Link>
                        <Link to="/feedback-and-suggestion" className="p-3 hover:bg-red-900 hover:text-white font-bold">Feedback and Suggestion</Link>
                        <Link to="/about-us" className="p-3 hover:bg-red-900 hover:text-white font-bold">About Us</Link>
                        <Link to="/team-and-support" className="p-3 hover:bg-red-900 hover:text-white font-bold">Team and Support</Link>
                    </nav>
                </aside>
                <div className="col-span-3 flex flex-col">
                    <nav className="w-full h-14 z-10 sticky top-0" style={{ backgroundColor: "#780000" }}>
                        <Breadcrumb />
                    </nav>
                    <main className="flex-grow bg-cover bg-no-repeat p-4">
                        {/* Two-column grid layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Content Column */}
                            <div className="flex flex-col justify-center p-4">
                                <h1 className="text-red-900 font-bold text-3xl mb-4">
                                    "Transforming Complaints into Solutions: Let’s Fix Our Community!"
                                </h1>
                                <p className="text-lg mb-2">
                                    "Stand Up for Your Rights: Report Issues, Get Involved!"
                                </p>
                                <p className="text-lg mb-2">
                                    "Be the Change: Report Issues, Impact Lives!"
                                </p>
                                <img src={image3} alt="Main Content" className=" h-fit object-right  w-screen" />
                            </div>
                            {/* Image Column */}
                            <div className="flex justify-center items-center p-4">
                                <img src={image2} alt="Main Content" className=" h-fit object-right  w-screen" />
                            </div>
                        </div>
                    </main>
                    <footer className="w-full text-white py-8" style={{ backgroundColor: "#780000" }}>
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
