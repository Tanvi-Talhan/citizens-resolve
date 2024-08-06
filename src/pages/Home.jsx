import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import image from "../assets/logo.png";



// import required modules

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function Home() {

    return (
        <>
            <div className="min-h-screen flex flex-col md:grid md:grid-cols-12">
                <Sidebar />

                {/* Main content */}
                <div className="col-span-10 flex flex-col">
                    {/* Navbar */}
                    <Navbar />
                    <Hero />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;
