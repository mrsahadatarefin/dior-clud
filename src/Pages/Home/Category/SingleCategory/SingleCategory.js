import React  from 'react';

const SingleCategory = ({single,onClick}) => {
    const {category_img,category} =single

   
    return (
       
        <div className="mt-5 md:mt-5 lg:mt-20">
       

        <div className="">
                    <img src={category_img} alt="" className="h-[400px] w-full m-auto    " />
                    </div>
                  <button onClick={()=> onClick(category)}  className="btn relative  bottom-20 left-[25%]  btn-outline content-center px-20 flex  text-black bg-white font-semibold hover:bg-white hover:text-black   ">
                  {category}
                  </button>
                    
                    
                
                 
        
                 
                </div>
     
    );
};

export default SingleCategory;