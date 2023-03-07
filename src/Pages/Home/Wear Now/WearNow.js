import React from 'react';
import img1 from '../../../assets/Wear Now/2d57b455_5d7e.avif'
import img2 from '../../../assets/Wear Now/8d13dab7_2a6f.avif'
import img3 from '../../../assets/Wear Now/8f37a3c9_c7a3.avif'
import img4 from '../../../assets/Wear Now/f88c3ddb_b3c0.avif'

const WearNow = () => {
    const Wears = [

        {
            img:img1,
            price:1190,
            title:"The Heavyweight Overshirt | Uniform",
            color:'Golden Palm'
        },
        {
            img:img2,
            price:1090,
            title:"The Easy Pant",
            color:"Black"
            
        },
        {
            img:img3,
            price:1290,
            title:"The Premium-Weight Long-Sleeve Crew | Uniform "

           
            
           ,
            price:' 3920',

            color:'Slate'
        },
        {
            img:img4,
            price:1490,
            title:"The Renew Transit Fanny Pack",

            price:'4900',
            color:'Black'
        },
    ]
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-medium text-black mt-20'>Wear Now, Love Forever</h1>
            </div>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-10'>
             {Wears.map(wear =><>
             
             <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <img className='w-[400px] ' src={wear.img} alt="" srcset="" />
                <p className=''>{wear.title}</p>
                <div className='grid grid-cols-2 '>
                   
                    
                    <p>${wear.price}</p>
                    <p><p>{wear.color}</p></p>
                </div>
                <div>
                   
                </div>
             </div>
             
             </>)}
            </div>
            
        </div>
    );
};

export default WearNow;