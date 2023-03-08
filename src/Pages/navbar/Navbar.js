import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/logo.png'
import { AuthContext } from '../../context/ContextProvider';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {
 
  const {user,logOut}=useContext(AuthContext)
  const [isAdmin]= useAdmin(user?.email)
  const handleLogout = ()=>{
    logOut()
    .then(()=>{
  
    })
    .catch(err => console.log(err))
  
     }

     const navInfo = <React.Fragment>
 <li><Link to='/' className='font-bold text-black'>Home</Link></li>
 

 

 
 
 {user?.email? <>
 
  <li tabIndex={0}>
        <Link className='font-semibold text-black'>
        dashboard
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2">
        <li><Link to='/myOrder' className='font-bold text-black  bg-white'>My orders</Link></li>
         {
          isAdmin &&  <li><Link to='/allUsers' className='font-bold text-black bg-white '>All users</Link></li>
         }
        </ul>
      </li>
      <li><Link to='/addProduct' className='font-bold text-black'>Add product</Link></li>
  <li className='font-bold text-black' onClick={handleLogout} ><Link >logout</Link></li>
 </>:
 
  <>
  <li ><Link className='font-bold text-black' to='/login'>login</Link></li>
  <li><Link className='font-bold text-black' to='/signUp'>sign up</Link></li>
  </>
 
 
 }


     </React.Fragment>

    return (
        <div className="navbar bg-[#f2f7ff] ">
  



  <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navInfo}

       
      </ul>
    </div>
    <img src={img} className='h-[50px] w-[50px]' alt="" srcset="" />
  </div>
  <div className="navbar-center hidden lg:flex">




    
    <ul className="menu menu-horizontal px-1">
    {navInfo}

    

 
    


    
    </ul>
  </div>
  <div className="navbar-end  mr-3 ">
  
  <input type="text" placeholder="Search" className="input input-bordered mx-3" />
  <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    
  </div>
</div>




</div>
    );
};

export default Navbar;