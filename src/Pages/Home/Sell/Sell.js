import React from "react";
import img from "../../../assets/banner/summer.jpeg";

const Sell = () => {
  return (
    <div className="mt-20 border-t-[1px] bg-[#dcdfe4] flex flex-col lg:flex-row " data-aos="zoom-in">
      <div className="w-full lg:w-[70%]">
        <img
          className="h-[400px] w-full lg:w-[70%] opacity-50"
          src={img}
          alt=""
          srcset=""
        />
      </div>

      <div className="w-full lg:w-[40%] m-4 lg:mt-28  " >
        <h1 className="text-4xl text-center mt-3 italic text-black  " >Summer Sale</h1>
        <p className="text-6xl text-center mt-3">50% off</p>
        <p className="text-xl text-center mt-3">
         
         
         Quisque ullamcorper risus dui, in venenatis mi tempor sed.{" "}
        </p>
      </div>
    </div>
  );
};

export default Sell;
