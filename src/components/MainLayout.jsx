import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />

        </div>
    );
};

export default MainLayout;
