import React from 'react';
import { useForm } from 'react-hook-form';
const AddProduct = () => {
    const { handleSubmit, register,formState:{errors} } = useForm();

    
    const handleAddService = data =>{
   
       console.log(data)
        
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
         const url = 'https://api.imgbb.com/1/upload?expiration=600&key=f98015dbbcd1ed2c025876eb031ae4c8';
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imageData => {
            
          if(imageData.success){
        
        
        
            const addProduct = {
        
                name :data.name,
              price:data.price,
              originalPrice:data.originalPrice,
              useTime:data.useTime,
              date:data.date,
              description:data.description,
              img:imageData.data.url
            
        
            }
           
         fetch('https://dior-server.vercel.app/category',{
        
         method:'POST',
         headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(addProduct),
         
         })
         .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            if(data.acknowledged === true ){
                alert(' service add successfully')
              
            }
            
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        
          }
        
            
         
          
          })
        
        }

    return (
           
        <div className="  mt-20 flex justify-center items-center mb-20  ">
        <div className="w-96 bg-[#f2f7ff] rounded-lg p-7">
          <h2 className="text-5xl text-center pt-20 font-bold">Add Product</h2>
          <p className='text-xl text-center pt-5'>Tell me what you want to sell</p>
          <form onSubmit={handleSubmit(handleAddService)}>
            <div className="form-control w-full max-w-xs mt-10">
              <label className="label">
                <span className="label-text"> product name</span>
                <toast></toast>
              </label>
              <input
                {...register("name", { required: "* name is required" })}
                type="text"
                className="input input-bordered w-full max-w-md"
              />
              {errors.name&& (

 
                <p role="alert" className="text-red-600">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">price</span>
                <toast></toast>
              </label>
              <input
                {...register("price", { required: "*price is required" })}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.price && (
                <p role="alert" className="text-red-600">
                  {errors.price?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">originalPrice</span>

                <toast></toast>
              </label>
              <input
                {...register("originalPrice", { required: "*originalPrice is required" })}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.originalPrice && (
                <p role="alert" className="text-red-600">
                  {errors.originalPrice?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">useTime</span>

         
       <toast></toast>
              </label>
              <input
                {...register("useTime", { required: "*useTime Area is required" })}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.useTime && (
                <p role="alert" className="text-red-600">
                  {errors.useTime?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">date</span>


                <toast></toast>
              </label>
              <input
                {...register("date", { required: "*Point of departure Area is required" })}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.date && (
                <p role="alert" className="text-red-600">
                  {errors.date?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">description</span>
                <toast></toast>
              </label>
              <textarea
                {...register("description", { required: "*description is required" })}
                type="text"
                className="textarea textarea-bordered w-full max-w-xs"
                placeholder="description"
              />
              {errors.description && (
                <p role="alert" className="text-red-600">
                  {errors.description?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">ADD your product image</span>
                <toast></toast>
              </label>
              <input
                {...register("image", { required: "*image  is required" })}
                type="file"
                className="file-input input-bordered w-full max-w-xs"
                
              />
              {errors.image && (
                <p role="alert" className="text-red-600">
                  {errors.image?.message}
                </p>
              )}
            </div>
            
  
            <input
              className="btn btn-accent bg-[#125294] text-white w-full mt-5 "
              value="submit"
              type="submit"
            />
          
          </form>
         
  
       
        </div>
      </div>
    );
};

export default AddProduct;