import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // add product
        addToWishlist:(state,productByComponent)=>{
            state.push(productByComponent.payload)
        },
        // remove from wishlist
        removeWishlistItem:(state,productByComponent)=>{
            return state.filter(item=>item.id!=productByComponent.payload)
        }
    }
    
})
export const{addToWishlist,removeWishlistItem}=wishlistSlice.actions
export default wishlistSlice.reducer