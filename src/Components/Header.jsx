import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../Redux/Slices/productSlice'


const Header = ({insideHome}) => {
const dispatch=useDispatch()
const myWishlist=useSelector(state=>state.wishlistReducer)
const myCart=useSelector(state=>state.cartReducer)

  return (
    <nav className='flex w-full bg-yellow-600 fixed top-0 p-5 items-center'>
      <Link to={'/'} className='text-white font-semibold text-2xl'><i className="fa-solid fa-truck-fast me-1"></i> FF Store</Link>
      <ul className='flex-1 text-right'>
       {insideHome&& <li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:"500px"}} className='rounded p-3' type="text" placeholder='Search Products Here!' /></li>}
        <li className='list-none inline-block px-5' ><Link to={'/Wishlist'}><i className="fa-solid fa-heart text-red-500 me-1"></i> Wishlist <span className=' bg-black p-1 rounded text-white'>{myWishlist.length}</span></Link></li>
        <li className='list-none inline-block px-5'><Link to={'/Cart'}><i className="fa-solid fa-cart-shopping text-green-500 me-1"></i> Cart <span className=' bg-black p-1 rounded text-white'>{myCart.length}</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header