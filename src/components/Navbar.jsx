import React, { useState } from 'react';
import Breadcrumb from '../pages/Breadcrumb';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <nav className="w-full h-14 z-10 sticky top-0 flex items-center justify-between px-4 md:px-0" style={{ backgroundColor: "#003049" }}>
                <button
                    className="text-white md:hidden"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? 'Close' : 'Menu'}
                </button>
                <Breadcrumb />
            </nav>
        </>
    );
};

export default Navbar;

