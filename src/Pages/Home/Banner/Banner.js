import React from 'react';
import img from '../../../assets/banner/banner.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    return (
        <div className='border-t-[1px] flex flex-col lg:flex-row     '>
            <div className='w-full lg:w-[70%]  '>
                <img className=' h-[400px] lg:h-[987px]'  src={img} alt="" srcset="" />
            </div>
            <div className='w-full lg:w-[30%] mt-10 mx-2 lg:mx-8 lg:mt-56 ' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <h1 className=' text-4xl font-semibold text-black lg:text-7xl '>Brand New <br /> classics</h1>
                <p className=' text-2xl  text-black mt-4'>Elevated basics for work or Play.</p>
                <h1 className='text-2xl text-black '>Now in new colors</h1>
                <button className="btn btn-wide mt-4 text-white">Shop Now</button>
            </div>
            
        </div>
    );
};

export default Banner;