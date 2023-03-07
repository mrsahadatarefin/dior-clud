import React, { useContext } from 'react';
import { AuthContext } from '../../../../../context/ContextProvider';

const BookingModal = ({product, setProduct} ) => {
    const {user}=useContext(AuthContext)
const handleBooking =(event)=>{
event.preventDefault();
const form = event.target;
const displayName = form.displayName.value;
const email = form.email.value;
const product = form.product.value;
const price = form.price.value;
const location = form.location.value

const image = form.image.value;


const order ={
    displayName,
    email,
    product,
    price,
    location,
    image
    

}
fetch("http://localhost:5000/orders",{
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      setProduct(null)
    })




console.log(order)


}

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{product.name}</h3>
    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10  m-auto ">
    <input type="text" placeholder="your name" name='displayName'  defaultValue={user?.displayName} readOnly className="input input-bordered w-full " />

    <input type="text" placeholder="Your email"   defaultValue={user?.email} name='email' 
 className="input input-bordered w-full "  />
    <input type="text" placeholder="product name " name='product' defaultValue={product?.name} readOnly className="input input-bordered w-full " />
    <input type="text" placeholder="Price" name='price' defaultValue={product?.price} readOnly className="input input-bordered w-full " />
    <input type="text" placeholder="location" name='location' className="input input-bordered w-full " required />
    <input type="text" placeholder="image" name='image' defaultValue={product?.img} readOnly className="input input-bordered w-full " />
    <input type="submit"  value='submit'  className='btn    text-white'/>



    </form>
  </div>
</div>
        </>
    );
};

export default BookingModal;