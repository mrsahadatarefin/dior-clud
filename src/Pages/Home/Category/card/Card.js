import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/ContextProvider';
import BookingModal from './BookingModal/BookingModal';

const Card = ({card,setProduct}) => {
    const{user}=useContext(AuthContext)
    const {name,img,description,price,date,originalPrice,useTime,rating}= card
    return (
        <div className=" w-96 bg-base-100 shadow-xl  ">
        
          
           <img src={img} className='h-[300px] w-full px-3  ' alt="Shoes" />
         
      
         <div className="card-body">
       
           <h2 className="card-title font-bold">{name}</h2>
           
           <p>{description.slice(0,35)}.....</p>
           <p className='text-xl  '> <span className='font-bold '>Price :</span>{price} <span className='text-black'>$</span></p>
          
           <div className="card-actions justify-center">
           
            
            {user?.email? <label htmlFor="booking-modal" className="btn btn-wide  text-white"onClick={()=>setProduct(card)} >Add To cart</label>:
           <Link to={'/login'}> <label htmlFor="booking-modal" className="btn btn-wide  text-white"onClick={()=>setProduct(card)} >Add To cart</label></Link> 
           
            } 
            
         
           </div>

             
          
         </div>
       
       </div>
    );
};

export default Card;