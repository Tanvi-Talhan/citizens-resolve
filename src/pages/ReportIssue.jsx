// src/NMCForm.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReportIssue = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col md:grid md:grid-cols-12">
                <Sidebar />

                {/* Main content */}
                <div className="col-span-10 flex flex-col">
                    {/* Navbar */}
                    <Navbar />
                    <div className="max-w-9xl mx-8 p-4 bg-white shadow-md rounded-lg my-8">
                        <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
                        <form className="flex flex-col md:flex-row gap-6">
                            {/* Left Section */}
                            <div className="w-full md:w-1/2">
                                {/* Full Name */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your Full Name"
                                    />
                                </div>

                                {/* Contact Information */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your Email Address"
                                    />
                                </div>

                                {/* Type of Issue */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Type of Issue</label>
                                    <select
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>Water Problem</option>
                                        <option>Electricity Problem</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                {/* Location */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Location</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your Address or Location"
                                    />
                                </div>

                                {/* Date of Occurrence */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Date of Occurrence</label>
                                    <input
                                        type="date"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* Time of Occurrence */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Time of Occurrence</label>
                                    <input
                                        type="time"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            {/* Vertical Line */}
                            <div className="border-l border-gray-300"></div>

                            {/* Right Section */}
                            <div className="w-full md:w-1/2">
                                {/* Description of the Problem */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Description of the Problem</label>
                                    <textarea
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        rows="8"
                                        placeholder="Describe the issue in detail"
                                    ></textarea>
                                </div>

                                {/* Severity Level */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Severity Level</label>
                                    <select
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>

                                {/* Upload Photos or Documents */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Upload Supporting Documents</label>
                                    <input
                                        type="file"
                                        className="mt-1 block w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>

                                {/* Acknowledgment Checkbox */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        <input
                                            type="checkbox"
                                            className="mr-2 leading-tight"
                                        />
                                        I confirm that the information provided is accurate.
                                    </label>
                                </div>

                                {/* Privacy Consent */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        <input
                                            type="checkbox"
                                            className="mr-2 leading-tight"
                                        />
                                        I agree to the privacy policy.
                                    </label>
                                </div>

                                {/* Submit and Reset Buttons */}
                                <div className="flex justify-between">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="reset"
                                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm hover:bg-gray-400"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Footer />
                </div>
            </div>

        </>

    );
};

export default ReportIssue;
