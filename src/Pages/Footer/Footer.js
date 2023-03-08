import React from 'react';
import img from '../../assets/logo.png'
import img1 from '../../assets/footer-icon/icons8-facebook-96.png'
import img2 from '../../assets/footer-icon/icons8-instagram-96.png'
import img3 from '../../assets/footer-icon/icons8-twitter-96.png'
import img4 from '../../assets/footer-icon/icons8-whatsapp-96.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title"></span> 
    <img src={img} className='h-[100px]' alt="" srcset="" />
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ' >
      <img className='h-[30px] hover:bg-slate-400' src={img1} alt="" />
      <img className='h-[30px] hover:bg-slate-400' src={img2} alt="" />
      <img className='h-[30px] hover:bg-slate-400' src={img3} alt="" />
      <img className='h-[30px] hover:bg-slate-400' src={img4} alt="" />
    </div>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
      
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
       
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-black text-white ">Subscribe</button>
      
        <h1 className='font-bold mt-5 '> Email: sahadatarefin@gmail.com</h1>
      
      </div>
    
    </div>
    
  </div>
  
</footer>
    );
};

export default Footer;