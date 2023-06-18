import React from "react";

const NewsLetter = () => {
  return (
    <div className=" bg-[#F5F5F5] lg:h-[400px] h-full mt-20 lg:px-0 px-5 ">
      <h1 className="lg:text-6xl text-4xl font-bold text-center lg:pt-10 pt-5">
        Sign Up News Letter
      </h1>
      <p className="text-center text-xl pt-5 "> 
      Sign Up our news letter and get our latest updation
      </p>
      <div className="relative max-w-[1200px] mx-auto mt-10">
      
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
       
        <button className="btn  hover:bg-white hover:text-black absolute top-0 right-0 rounded-l-none bg-black text-white ">subscribe</button>
    
      </div>
    </div>
  );
};

export default NewsLetter;
