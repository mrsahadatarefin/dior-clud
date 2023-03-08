import React from "react";
import img1 from "../../../assets/icon/icons8-car-roof-box-100.png";
import img2 from "../../../assets/icon/icons8-lotto-100.png";
import img3 from "../../../assets/icon/icons8-location-100.png";

const Shipping = () => {
  const shipping = [
    {
      img: img1,

      title: "Complimentary Shipping",
      dis: "Enjoy free shipping on U.S. orders over $75.",
    },
    {
      img: img2,

      title: "Consciously Crafted",
      dis: "Designed with you and the planet in mind.",
    },
    {
      img: img3,

      title: "Come Say Hi",

      dis: "We have 11 stores across the U.S.",
    },
  ];
  return <div className="mt-20  bg-[#f5f1e0]" data-aos="zoom-in">
    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
    {
    shipping.map(shi=><>
    <div className=" p-28" 
     >
        <img src={shi.img} alt="" srcset="" className="m-auto" />
        <h1 className="text-center text-xl text-black font-bold"> {shi.title}</h1>
        <p className="text-center text-xl text-black">{shi.dis}</p>
    </div>
    
    
    </>)
  }

    </div>
  
  


  </div>;
};

export default Shipping;
