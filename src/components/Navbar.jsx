import React, { useState } from 'react';
import Breadcrumb from '../pages/Breadcrumb';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <nav className="w-full h-14 z-10 sticky top-0 flex items-center justify-between px-4 md:px-0 pl-10" style={{ backgroundColor: "#003049" }}>
                <Breadcrumb />
                <button
                    className="text-white md:hidden"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? 'Close' : 'Menu'}
                </button>
                <button
                    className="text-[#003049] bg-white border border-[#669bbc] font-bold px-4 py-1 rounded-lg mr-8 transition duration-400 ease-in-out transform hover:bg-[#669bbc] hover:text-white"
                    style={{ fontSize: 'bold' }}
                >
                    Login
                </button>
            </nav>
        </>
    );
};

export default Navbar;
