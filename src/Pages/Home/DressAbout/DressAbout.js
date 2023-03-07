import React from "react";
import img from "../../../assets/banner/pexels-photo-7621779.jpeg";

const DressAbout = () => {
  return (
    <div className="border-t-[1px] flex flex-col lg:flex-row    ">
      <div className="w-full lg:w-[50%] mt-10 mx-2 lg:mx-8 lg:mt-56 " data-aos="fade-up"
     data-aos-duration="3000">
        <h1 className=" text-4xl font-semibold text-black lg:text-5xl text-center ">
        Dress like a boss.
        </h1>
        <p className=" text-xl  text-center text-black mt-4">
          Mauris in augue id felis sollicitudin laoreet eu vitae tellus. Sed
          pellentesque enim in eros molestie, pulvinar lacinia arcu tempus.
          Integer porttitor neque a lacus blandit, eget iaculis enim malesuada.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-10">
        <div>
            <h1 className="text-4xl font-bold text-[#104b89] italic font-poni">14</h1>
        <p className="text-2xl font-medium text-black ">Showrooms</p>
        </div>
        <div>
        <h1 className="text-4xl font-bold text-[#104b89] italic">150</h1>
        <p className="text-2xl font-medium text-black ">man Styles</p>

        </div>
        <div><h1 className="text-4xl font-bold text-[#104b89] italic">26</h1>
        <p className="text-2xl font-medium text-black ">Collections</p>
        </div>
        

        </div>
       
      </div>
      <div className="w-full lg:w-[50%] mt-10  " data-aos="fade-up"
     data-aos-duration="3000">
        <img className="  w-full h-[400px] lg:h-[600px]" src={img} alt="" srcset="" />
      </div>
    </div>
  );
};

export default DressAbout;
