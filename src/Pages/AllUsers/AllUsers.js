import React, { useEffect, useState } from 'react';

const AllUsers = () => {
const[users,setUsers]=useState([])

useEffect(()=>{
fetch('https://dior-server-mrsahadatarefin.vercel.app/users')
.then(res => res.json())
.then(data => setUsers(data))


},[])


const handleMakeAdmin = (id)=>{
fetch(`https://dior-server-mrsahadatarefin.vercel.app/users/admin/${id}`,{
    method:'PUT'
})
.then(res => res.json())
.then(data => {
    console.log(data)
alert('make admin successfully')

})

}

    return (
        <div className="overflow-x-auto  mt-20  w-full h-[800px] ">
        <table className="table  w-full bg-white  ">
     
          <thead className='bg-white'>
            <tr>
             
              <th className="text-xl font-semibold text-black" >Name</th>
              <th className="text-xl font-semibold text-black" >Email</th>
              <th className="text-xl font-semibold text-black" >Title</th>
              
              <th className="text-xl font-semibold text-black" >Make Admin</th>
              <th className="text-xl font-semibold text-black" >Delete</th>




              
            </tr>
          </thead>
          <tbody>
           
         {
          users.map(or =><>
           
           <tr>
             
              <td>
                <h1 className=" font-semibold text-black" >{or.name}</h1>


              </td>
              <td className=" font-semibold text-black" >{or.email}</td>
              <td className=" font-semibold text-black" >{or.title}</td>
              
              <th>
               {or.role !=='admin'&& <button className="btn btn-outline btn-xs"onClick={()=>handleMakeAdmin(or._id)} >make admin</button>}
              </th>
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

export default AllUsers;