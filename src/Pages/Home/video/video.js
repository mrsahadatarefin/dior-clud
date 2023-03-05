import React from 'react';
import img from '../../../assets/Travis_Scott_models_the_Air_Dior_line(480p).mp4'

const Video = () => {
    return (
        <div >
            
            <video className='w-full absolute z-[-1] top-0 left-100 '  autoPlay loop muted  >
             <source src={img} type='video/mp4' />
            </video>
            
        </div>
    );
};

export default Video;