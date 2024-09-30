import React from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../Redux/Slices/WishlistSlice'
import { addToCart } from '../Redux/Slices/CartSlice'



const Wishlist = () => {
  const myCart=useSelector(state=>state.cartReducer)
const myWishlist=useSelector(state=>state.wishlistReducer)
const dispatch=useDispatch()

const handleAddToCart=(product)=>{
  const existinhProduct=myCart?.find(item=>item.id==product.id)
  if(existinhProduct){
    dispatch(addToCart(product))
    dispatch(removeWishlistItem(product.id))
    alert("Product Quantity is increasing")
  }else{
    dispatch(addToCart(product))
    dispatch(removeWishlistItem(product.id))
  }
}

  return (
    <>
    <Header />
    <div style={{ marginTop: "90px" }} className='container mx-auto px-4'>
      {
        myWishlist.length>0?
        <>
        <h1 className='text-red-500 text-3xl font-bold mb-5'>Your Wishlist</h1>
        <div className='grid grid-cols-4 gap-4 '>
          {
            myWishlist.map(product=>(
              <div key={product?.id} className="rounded border p-2 shadow">
            <img style={{ width: "100%", height:"350px" }} src={product.thumbnail} alt="" />
            <div className='text-center '>
              <h3 className='text-xl font-bold'>{product.title}</h3>
              <div className="flex justify-evenly mt-3 pb-2">
                <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='border shadow text-xl rounded p-2' ><i className="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                <button onClick={()=>handleAddToCart(product)} className='border shadow text-xl rounded p-2'><i className="fa-solid fa-cart-plus text-green-600"></i></button>

              </div>
            </div>
          </div>
            ))
          }
  
        </div>
      </>
      :
      <div className="font-bold flex-col text-red-600 text-2xl justify-center items-center flex" style={{height:"48vh",width:"100%"}}>
        <h1>Your Wishlist is Empty!!!</h1>
      </div>
      }
    </div>
  </>
  )
}

export default Wishlist