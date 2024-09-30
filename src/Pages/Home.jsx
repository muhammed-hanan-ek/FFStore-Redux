import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../Redux/Slices/productSlice'


const Home = () => {
  const dispatch = useDispatch()
  const {allProducts,loading,error}= useSelector(state=>state.productReducer)
  // console.log(allProducts);
  
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  const[CurrentPage,setCurrentPage]=useState(1)
   const productPerPage=8
   const TotalPages= Math.ceil(allProducts?.length/productPerPage)
   const CurrentPageLastIndex=CurrentPage * productPerPage
   const CurrentPageStartIndex= CurrentPageLastIndex - productPerPage
   const VisibleProductCards=allProducts?.slice(CurrentPageStartIndex,CurrentPageLastIndex)

   const nextPage = ()=>{
    if(CurrentPage!=TotalPages){
      setCurrentPage(CurrentPage+1)
    }
   }

   const PrevPage = ()=>{
    if(CurrentPage!=1){
      setCurrentPage(CurrentPage-1)
    }
   }


  return (
    <>
      <Header insideHome={true} />
      <div style={{ marginTop: "90px" }} className='container mx-auto px-4'>
        {
          loading?
          
          <div style={{height:"100vh"}} >
            <div className="flex justify-center items center font-bold"><img src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="" /></div>
            <div className="flex justify-center items center font-bold">Loading...</div>
          </div>
          :
          
          <>
            <div className='grid grid-cols-4 gap-4 '>
            {
              allProducts.length>0 ?
              VisibleProductCards?.map(product=>(
                <div key={product.id} className="rounded border p-2 shadow">
              <img style={{ width: "100%", height: "350px" }} src={product?.thumbnail} alt="" />
              <div className='text-center '>
                <h3 className='text-xl font-bold'>{product?.title}</h3>
                <Link className='bg-blue-500 text-white p-2 inline-block rounded' to={`/${product?.id}/View`}>View More</Link>
              </div>
            </div>
              )):<div className="font-bold text-center mt-5 mb-5 text-red-600">
              Product Not Found
            </div>
            }
            
  
          </div>
          {/* pagination */}
          <div className="flex justify-center items-center mb-5 mt-5">
            <span onClick={PrevPage} style={{cursor:"pointer"}}><i className="fa-solid fa-backward me-5"></i></span>
            <span className='font-bold'>{CurrentPage} of {TotalPages}</span>
            <span onClick={nextPage} style={{cursor:"pointer"}}><i className="fa-solid fa-forward ms-5"></i></span>

          </div>
          </>


        }
      </div>

    </>
  )
}

export default Home