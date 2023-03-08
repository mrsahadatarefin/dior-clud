import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "./card/BookingModal/BookingModal";
import Card from "./card/Card";
import SingleCategory from "./SingleCategory/SingleCategory";

const Category = () => {
    const [category, setCategory] = useState([]);

    const [products, setProducts] = useState([]);
    const [product,setProduct]=useState(null)

  
  useEffect(() => {
    fetch("https://dior-server.vercel.app/categoryName")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);


  const handleSelectCategory = (categoryName) => {
     fetch(`https://dior-server.vercel.app/category/by/?category=${categoryName}`)

      .then((res) => res.json())
      .then((data) => {
        console.log("data ==> ", data);
        if (data?.length > 0) {
          setProducts(data);
        }
      })}

 
  return (
    <div className="mt-20" data-aos="zoom-in">
      <h1 className="text-center text-4xl  font-bold text-black">
        Shop by Category
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 " data-aos="zoom-in">
        {category.map(single => ( <SingleCategory
         key={single._id}
         single ={single}
         onClick={handleSelectCategory}
         


          >

 


        </SingleCategory>
 ))} 
            


        
       
      </div>
     
    <div className="grid grid-cols-1 gap-20 md:grid-cols-2  lg:grid-cols-4  justify-items-center lg:w-[80%] m-auto  ">

    {products.map(ca =><Card key={ca._id}card={ca} setProduct={setProduct} >




</Card>
)}
    </div>

    {product && <BookingModal   product={product} setProduct={setProduct}  >
  
   
  </BookingModal>
}
    </div>
  );
};

export default Category;
