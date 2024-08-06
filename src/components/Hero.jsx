import React from 'react'
// Import Swiper styles

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import image5 from "../assets/home-carousel/1.png";
import image6 from "../assets/home-carousel/2.png";
import image7 from "../assets/home-carousel/3.png";
import image8 from "../assets/home-carousel/4.png";

const Hero = () => {
    return (
        <>
            {/* Main content with Swiper */}
            <main className="flex-grow flex bg-cover bg-no-repeat ">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper flex w-full"
                >
                    <SwiperSlide>
                        <img src={image6} alt="image" className="border-4 border-black" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image5} alt="image" className="border-4 border-black" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image7} alt="image" className="border-4 border-black" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image8} alt="image" className="border-4 border-black" />
                    </SwiperSlide>
                </Swiper>
            </main>
        </>
    )
}

export default Hero
