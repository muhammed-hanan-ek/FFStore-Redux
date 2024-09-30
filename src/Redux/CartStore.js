import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import WishlistSlice from "./Slices/WishlistSlice";
import CartSlice from "./Slices/CartSlice";


const cartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:WishlistSlice,
        cartReducer:CartSlice
    }
})


export default cartStore