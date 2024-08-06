import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
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
        </>
    );
};

export default Footer;
