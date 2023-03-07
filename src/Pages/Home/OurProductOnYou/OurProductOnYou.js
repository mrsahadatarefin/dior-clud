import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import img1 from '../../../assets/dioronyou/pexels-photo-1040945.webp'
import img2 from '../../../assets/dioronyou/pexels-photo-1043473.webp'
import img3 from '../../../assets/dioronyou/pexels-photo-1043474.webp'
import img4 from '../../../assets/dioronyou/pexels-photo-1205033.jpeg'
import img5 from '../../../assets/dioronyou/pexels-photo-1813947.jpeg'
import img6 from '../../../assets/dioronyou/pexels-photo-2709563.webp'
import img7 from '../../../assets/dioronyou/pexels-photo-775358.webp'
import img8 from '../../../assets/dioronyou/pexels-photo-878358.jpeg'

const OurProductOnYou = () => {
    const imgs = [
        
        {img:img1},
        {img:img2},
        {img:img3},
        {img:img4},
        {img:img5},
        {img:img6},
        {img:img7},
        {img:img8},
    
    
    
    ]
    return (
        
        <div className='mt-20 w-full lg:w-[1440px]  m-auto' data-aos="fade-up"
        data-aos-duration="3000">
            
           
               <div className='text-center' > 
                
                <h1 className='text-center text-4xl font-semibold text-black  '>Dior  On You</h1>
                <p className='text-center text-xl  text-black  '>Share your latest looks with #DiorOnYou for a chance to be featured.</p>
                </div>
            
            <div>
            <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
           imgs.map(im=><>
            <SwiperSlide><img className='mt-10 h-[400px] w-[400px]' src={im.img} alt="" srcset="" /></SwiperSlide>
           </>)
        }
        
      </Swiper>
    </>
                
            </div>
        </div>
    );
};

export default OurProductOnYou;