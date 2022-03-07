
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {value: {
        cart: [],
        cartCount: 0,
        total: 0
    }},
    reducers: {
        addToCart: (state, action) => {
            //console.log(action.payload);
            //console.log(state.value.total);
            let cartItem = state.value.cart.find((item) => item.id === action.payload.id);

            if(cartItem) {
                state.value.cart = [...state.value.cart];
                cartItem.quantity += action.payload.quantity;
                state.value.cartCount += action.payload.quantity;
                state.value.total += (action.payload.price)*(action.payload.quantity);
            }
            else {
                state.value.cart = [...state.value.cart, action.payload];
                state.value.cartCount += action.payload.quantity;
                state.value.total += (action.payload.price)*(action.payload.quantity);
            }
            //console.log(state.value.cartCount);            
            //console.log(state.value.total);            
            //console.log(state.value.cart);                
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;