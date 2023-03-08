import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/ContextProvider';

const MyOrder = () => {
    const{user}=useContext(AuthContext)
 
    const [order,serOrder]=useState([])
    useEffect(()=>{
        fetch(`https://dior-server.vercel.app/orders/?email=${user?.email}`)
        .then(res=> res.json())
        .then(data =>serOrder(data))


    },[user?.email])


    return (
        <div className="overflow-x-auto  mt-20  w-full h-[800px] ">
        <table className="table  w-full  ">
     
          <thead>
            <tr>
              <th className="text-xl font-semibold text-black" >
               product image
              </th>
              <th className="text-xl font-semibold text-black" >Name</th>
              <th className="text-xl font-semibold text-black" >Email</th>
              <th className="text-xl font-semibold text-black" >product Name</th>
              <th className="text-xl font-semibold text-black" >price</th>
              <th className="text-xl font-semibold text-black" >location</th>
              <th className="text-xl font-semibold text-black" >Delete</th>




              
            </tr>
          </thead>
          <tbody>
           
         {
           order.map(or =><>
           
           <tr>
             
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle  w-[100px] h-[100px]">
                      <img src={or.image} className='' alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  
                </div>
              </td>
              <td>
                <h1 className=" font-semibold text-black" >{or.displayName}</h1>


              </td>
              <td className=" font-semibold text-black" >{or.email}</td>
              <td className=" font-semibold text-black" >{or.product}</td>
              <td className=" font-semibold text-black" >{or.price}$</td>
              <td className=" font-semibold text-black" >{or.location}</td>
              <th>
                <button className="btn btn-outline btn-xs">Delete</button>
              </th>
            </tr>
           
           
           </>) 
         }


           
            
           
           
          </tbody>
         
          
        </table>
      </div>
    );
};

export default MyOrder;