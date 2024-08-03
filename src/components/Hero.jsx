import React from 'react'
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";

const Hero = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Content Column */}
                <div className="flex flex-col justify-center p-4">
                    <h1 className="text-red-900 font-bold text-3xl mb-4">
                        "Transforming Complaints into Solutions: Let’s Fix Our Community!"
                    </h1>
                    <p className="text-lg mb-2">
                        "Stand Up for Your Rights: Report Issues, Get Involved!"
                    </p>
                    <p className="text-lg mb-2">
                        "Be the Change: Report Issues, Impact Lives!"
                    </p>
                    <img src={bg} alt="Main Content" className=" h-fit object-right  w-screen" />
                </div>
                {/* Image Column */}
                <div className="flex justify-center items-center p-4">
                    <img src={bg2} alt="Main Content" className=" h-fit object-right  w-screen" />
                </div>
            </div>
        </>
    )
}

export default Hero
