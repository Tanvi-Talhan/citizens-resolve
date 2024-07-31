import React from 'react';
import { Link } from 'react-router-dom';
// import { Footer } from './Footer';
import image from "../assets/logo.png"

const Sidebar = () => {
  return (
    <div className="h-screen w-80 bg-black text-white flex flex-col">
      <div className="p-4 flex items-center justify-center">
        <img src={image} alt="Citizen Resolve Logo" className=" items-center h-40 w-42 " />
      </div>
      <nav className="mt-0 flex flex-col space-y-2 ml-16">
        <Link to="/" className="p-2 hover:bg-gray-700">Home</Link>
        <Link to="/report-issue" className="p-2 hover:bg-gray-700">Report Issue</Link>
        <Link to="/issue-tracker" className="p-2 hover:bg-gray-700">Issue Tracker</Link>
        <Link to="/government-action" className="p-2 hover:bg-gray-700">Government Action</Link>
        <Link to="/news-and-update" className="p-2 hover:bg-gray-700">News and Update</Link>
        <Link to="/guidelines-and-safety-tips" className="p-2 hover:bg-gray-700">Guidelines and Safety </Link>
        <Link to="/user-profile" className="p-2 hover:bg-gray-700">User Profile</Link>
        <Link to="/faq" className="p-2 hover:bg-gray-700">FAQ</Link>
        <Link to="/feedback-and-suggestion" className="p-2 hover:bg-gray-700">Feedback and Suggestion</Link>
        <Link to="/about-us" className="p-2 hover:bg-gray-700">About Us</Link>
        <Link to="/team-and-support" className="p-2 hover:bg-gray-700">Team and Support</Link>
      </nav>
      {/* <div className="mt-auto p-4">
        <Footer />
      </div> */}
    </div>
  );
};

export default Sidebar;
