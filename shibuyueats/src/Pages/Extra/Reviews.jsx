import React, { useEffect } from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const Reviews = () => {
    const [data, setData] = useState([]);
    // console.log(data)

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='container mx-auto py-10'>
            <h3 className="text-5xl font-bold text-center py-5">What they say?</h3>
            <h3 className='text-center font-semibold text-lg'>"Cook with Confidence,  Reviews from Customers Who Succeeded with Our Recipes"</h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper py-9 px-2"
            >
                {
                    data && data.map(re => <SwiperSlide key={re.id} >
                        <div className='border-3 my-8  text-center h-72 rounded-lg shadow-2xl'>
                            <div className='flex justify-center bg-slate-800'>
                                <img className='h-40' src={re.photoUrl} alt="" />
                            </div>
                            <div className='p-2'>
                                <p className='font-bold'>{re.name}</p>
                                <p>{re.review}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;