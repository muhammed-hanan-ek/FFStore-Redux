import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../Redux/Slices/CartSlice'


const Cart = () => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const myCart=useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal]=useState()

  useEffect(()=>{
    if(myCart.length>0){
      setCartTotal(myCart.map(item=>item.totalPrice)?.reduce((a,b)=>a+b))
    }
  },[myCart])

const handleDecProduct=(product=>{
  if(product.quantity>1){
    dispatch(decQuantity(product.id))
  }else{
    dispatch(removeCartItem(product.id))
  }
})

const handleCheckout=()=>{
  dispatch(emptyCart())
  alert("Order placed successfully!!! Thank you for purchasing with us...")
  navigate('/')
}


  return (
    <>
      <Header />
      <div style={{ marginTop: "90px" }} className='container mx-auto px-4'>
       {
        myCart.length>0?
        <>
        <h1 className="font-bold text-3xl text-red-600 mb-4">Cart Summary</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 border rounded p-5 shadow">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <td className="font-semibold">#</td>
                  <td className="font-semibold">Name</td>
                  <td className="font-semibold">Image</td>
                  <td className="font-semibold">Quantity</td>
                  <td className="font-semibold">Price</td>
                  <td className="font-semibold">...</td>
                </tr>
              </thead>
              <tbody>
                {
                  myCart.map((product,index)=>(
                    <tr key={product?.id}>
                  <td>{index+1}</td>
                  <td>{product.title}</td>
                  <td><img width={'70px'} height={'70px'} src={product.thumbnail} alt="" /></td>
                  <td><div className='flex'>
                    <button onClick={()=>handleDecProduct(product)} className="font-bold">-</button>
                    <input type="text" style={{ width: "40px" }} className='border rounded p-1 me-2 ms-2' value={product.quantity} readOnly />
                    <button onClick={()=>dispatch(incQuantity(product?.id))} className="font-bold">+</button>
                  </div></td>
                  <td>${product.totalPrice}</td>
                  <td>
                    <button onClick={()=>dispatch(removeCartItem(product?.id))}><i className="fa-solid fa-trash text-red-600"></i></button>
                  </td>
                </tr>
                  ))
                }
              </tbody>
            </table>
            <div className="float-right mt-4">
              <button onClick={()=>dispatch(emptyCart())} className="bg-red-600 text-white rounded p-3 me-3">EMPTY CART</button>
              <Link to={'/'} className="bg-blue-600 text-white rounded p-3 me-3">SHOP MORE</Link>
            </div>
          </div>
          <div className="border rounded shadow p-5">
            <h1 className="text-2xl font-bold">Total Amount: <span className="text-red-600">${cartTotal}</span></h1>
            <hr />
            <button onClick={handleCheckout} className="w-full bg-green-600 rounded p-5 text-white font-bold mt-5">
              Checkout
            </button>
          </div>
        </div>
      </>:
       <div className="font-bold flex-col text-red-600 text-2xl justify-center items-center flex" style={{height:"48vh",width:"100%"}}>
       <h1>Your Cart is Empty!!!</h1>
     </div>
       }
      </div>
    </>
  )
}

export default Cart