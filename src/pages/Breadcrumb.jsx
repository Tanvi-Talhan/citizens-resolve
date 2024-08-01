// Breadcrumb.js
import React from 'react';
// import { FaHome } from 'react-icons/fa';

const Breadcrumb = () => {
    return (
        <nav className="flex items-center text-white text-lg">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-center text-gray-500 hover:text-gray-700">
                        {/* <FaHome className="mr-2" /> */}
                    </a>
                </li>
                <li>
                    <div className="flex items-center p-2">
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.293 16.707a1 1 0 010-1.414L13.586 11 9.293 6.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                        </svg>
                        <a href="/projects" className="ml-1 text-white hover:text-gray-700 ">Projects</a>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.293 16.707a1 1 0 010-1.414L13.586 11 9.293 6.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                        </svg>
                        <span className="ml-1 text-white">Project Home</span>
                    </div>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
