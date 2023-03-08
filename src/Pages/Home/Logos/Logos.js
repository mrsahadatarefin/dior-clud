import React from 'react';
import img1 from '../../../assets/logo/partners-01.png'
import img2 from '../../../assets/logo/partners-02.png'
import img3 from '../../../assets/logo/partners-03.png'
import img4 from '../../../assets/logo/partners-04.png'
import img5 from '../../../assets/logo/partners-05.png'
import img6 from '../../../assets/logo/partners-06.png'

const Logos = () => {
    const logos = [
        {img:img1},
        {img:img2},
        {img:img3},
        {img:img4},
        {img:img5},
        {img:img6}
    ] 
    return (
        <div className='bg-black   w-full grid gap-5  grid-cols-1 lg:grid-cols-6 justify-items-center md:grid-cols-3  ' data-aos="zoom-in">
             {
           logos.map(logo => <>

           <img src={logo.img} alt="" className='h-[200px] transition ease-in-out delay-100 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:text-[#e0f2fe] duration-300 ... animate-fade-up animate-once' />
           </>  )
           } 
        </div>
    );
};

export default Logos;