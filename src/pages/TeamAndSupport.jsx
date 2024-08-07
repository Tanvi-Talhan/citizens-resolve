import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import picture from "../assets/home-carousel/team1.jpeg";
import picture1 from "../assets/home-carousel/team2.jpg";
import picture2 from "../assets/home-carousel/team3.jpeg";

const TeamAndSupport = () => {
    return (
        <>
                    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(path-to-your-background-image.jpg)' }}>
                        <div className="bg-[#669bbc]  min-h-screen p-10">
                            <TeamSection />
                            <SupportSection />
                        </div>
                    </div>
        </>
    );
}

const TeamSection = () => {
    const teamMembers = [
        { name: 'Jay Kumar', role: 'Developer', image: picture1 },
        { name: 'Jane Smith', role: 'Designer', image: picture2 },
        { name: 'Sam Wilson', role: 'Project Manager', image: picture },
    ];

    return (
        <div className="h-fit w-full flex items-center justify-center">
            <div className="text-blue-950 mb-10 w-full">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center p-6 bg-white bg-opacity-20 rounded-lg">
                            <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-sm">{member.role}</p>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

const SupportSection = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        contact: '',
        area: '',
    });

    const [errors, setErrors] = React.useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required.';
        if (!formData.contact) tempErrors.contact = 'Contact is required.';
        if (!formData.area) tempErrors.area = 'Area is required.';
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
        <div className="text-white bg-[#003049] p-10 rounded-lg mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Support</h2>
            <form onSubmit={handleSubmit} className="bg-[#003049] p-6 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-black rounded-md"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="contact">Contact Details</label>
                    <input
                        type="text"
                        name="contact"
                        id="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-black rounded-md"
                    />
                    {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="area">Area</label>
                    <input
                        type="text"
                        name="area"
                        id="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-black rounded-md"
                    />
                    {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area}</p>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-[#669bbc] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TeamAndSupport;
