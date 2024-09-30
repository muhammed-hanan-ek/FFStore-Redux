import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-yellow-600 w-full p-5 mt-5'>
      <div className="grid grid-cols-4 gap-4 text-white p-5">
        <div>
          <h4 className='mb-3 font-bold'><Link to={'/'} className='text-white font-semibold text-2xl'><i className="fa-solid fa-truck-fast me-1"></i> FF Store</Link></h4>
          <div style={{fontFamily:"sans-serif"}}>
              Designed and built with all love in the world by <br />the Luminar team with the help of our <br />contributers
              <br /><br />Code licensed Luminar, docs CC BY 3.0. <br /> <br />Currently v5.3.2
           </div>
        </div>
        <div className='text-xl'>
          <h4 className='font-bold text-3xl'>Links</h4>
          <Link to={'/'} style={{textDecoration:"none"}} className='font-bold text-white'>Home</Link><br />
          <Link to={'Wishlist'} style={{textDecoration:"none"}} className='font-bold text-white'>Wishlist</Link><br />
          <Link to={'Cart'} style={{textDecoration:"none"}} className='font-bold text-white'>Cart</Link><br />
        </div>
        <div className="font-bold text-xl">
          <h4 className='text-3xl'>Guides</h4>
              React <br />React Bootstrap <br />React Router
        </div>
        <div className="contacts">
          <h4 className='font-bold text-3xl'>Contact Us</h4>
          <div className="flex mt-3">
            <input type="text" placeholder='Enter your email here' className='p-2 rounded w-full' />
            <Link className=' bg-white ms-2 p-3 rounded'><i className="fa-solid fa-right-long text-yellow-600 font-bold text-xl"></i></Link>
          </div>
          <div className="flex justify-between mt-3" style={{color:"white"}}>
            <i className="fa-brands fa-twitter text-xl"></i>
            <i className="fa-brands fa-instagram text-xl"></i>
            <i className="fa-brands fa-facebook text-xl"></i>
            <i className="fa-brands fa-linkedin text-xl"></i>
            <i className="fa-brands fa-github text-xl"></i>
            <i className="fa-solid fa-phone text-xl"></i>
          </div>
        </div>
      </div>
      <p className='text-center mt-3 font-bold text-white mb-5'>Copyright © May 2024 Batch,FF Store. Built with React.</p>
    </div>
  )
}

export default Footer