import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cartItems",
    initialState:[],
    reducers:{
        // add to cart
        addToCart:(state,actionFromView)=>{
            const existingProdut=state.find(item=>item.id==actionFromView.payload.id)
            if(existingProdut){
                const remainingProducts= state.filter(item=>item.id!=actionFromView.payload.id)
                existingProdut.quantity++
                existingProdut.totalPrice=existingProdut.quantity*existingProdut.price
                state=[...remainingProducts,existingProdut]
            }else{
                state.push({...actionFromView.payload,quantity:1,totalPrice:actionFromView.payload.price})
            }
        },
        // remove item from cart
        removeCartItem: (state,actionFromCart)=>{
            return state.filter(item=>item.id!=actionFromCart.payload)
        },
        // inc qnty
        incQuantity: (state,actionFromCart)=>{
            const existingProdut = state?.find(item=>item.id==actionFromCart.payload)
            existingProdut.quantity++
            existingProdut.totalPrice=existingProdut.quantity*existingProdut.price
            const remainingProducts=state?.filter(item=>item.id!=actionFromCart.payload.id)
            state=[...remainingProducts,existingProdut]
        },
    // dec qnty
    decQuantity: (state,actionFromCart)=>{
        const existingProdut = state?.find(item=>item.id==actionFromCart.payload)
        existingProdut.quantity--
        existingProdut.totalPrice=existingProdut.quantity*existingProdut.price
        const remainingProducts=state?.filter(item=>item.id!=actionFromCart.payload.id)
        state=[...remainingProducts,existingProdut]
    },
    // empty cart
    emptyCart:(state)=>{
        return state=[]
    }
    
    }
})

export const {addToCart,removeCartItem,incQuantity,decQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer