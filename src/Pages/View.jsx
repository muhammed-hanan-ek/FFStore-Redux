import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/Slices/WishlistSlice'
import { addToCart } from '../Redux/Slices/CartSlice'



const View = () => {
  const myCart=useSelector(state=>state.cartReducer)
  const myWishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  const [product,setProduct]=useState({})

  const {id}=useParams()
  // console.log(id);

  useEffect(()=>{
    if (sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
  // console.log(product);
  const handleWishlist=(product)=>{
    if(myWishlist?.includes(product)){
      alert("This product is already available in your wishlist")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleAddToCart=(product)=>{
    const existinhProduct=myCart?.find(item=>item.id==product.id)
    if(existinhProduct){
      dispatch(addToCart(product))
      alert("Product Quantity is increasing")
    }else{
      dispatch(addToCart(product))
    }
  }
  return (
    <>
      <Header/>
      <div style={{minHeight:"90vh"}} className="flex justify-center items-center mt-5">
        <div className="grid grid-cols-2 gap-4">
          <img style={{width:"100%", height:'600px'}} src={product?.thumbnail} alt="" />
          <div style={{marginTop:'150px'}} className='p-5'>
            <h3>Pid:{product?.id}</h3>
            <h1 className="text-3xl font-bold">{product?.title}</h1>
            <h4 className="font-bold text-red-500 text-xl">{product?.price}</h4>
            <p className='text-xl' style={{textAlign:'justify'}}><span className="font-bold">Description:</span>{product?.description}</p>
            <div className="flex justify-between m-3">
              <button onClick={()=>handleWishlist(product)} className="bg-blue-600 text-white p-2 rounded">
                Add to Wishlist
              </button>
              <button onClick={()=>handleAddToCart(product)} className="bg-green-600 text-white p-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View