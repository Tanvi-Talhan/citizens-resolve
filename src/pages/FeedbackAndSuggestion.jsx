import React, { useState } from 'react';


const FeedbackAndSuggestion = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contact: '',
        email: '',
        suggestion: '',
        image: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "First name is required.";
        if (!formData.lastName) tempErrors.lastName = "Last name is required.";
        if (!formData.contact) tempErrors.contact = "Contact is required.";
        if (!formData.email) tempErrors.email = "Email is required.";
        if (!formData.suggestion) tempErrors.suggestion = "Suggestion is required.";
        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission
            console.log(formData);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#669bbc] ">
            <div className="w-96 mx-auto p-6  bg-[#003049] rounded-t-xl shadow-md ">
                <h2 className="text-2xl font-bold text-white mb-4">Feedback and Suggestion</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="contact">
                            Contact
                        </label>
                        <input
                            type="text"
                            name="contact"
                            id="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="suggestion">
                            Suggestion
                        </label>
                        <textarea
                            name="suggestion"
                            id="suggestion"
                            value={formData.suggestion}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.suggestion && <p className="text-red-500 text-xs mt-1">{errors.suggestion}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="image">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-white
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-white text-blue-950 font-bold py-2 px-4 rounded-md hover:bg-[#669bbc] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default FeedbackAndSuggestion