
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {value: {
        cart: localStorage.getItem('cartItems') 
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        cartCount: localStorage.getItem('cartCount') 
        ? Number(localStorage.getItem('cartCount'))
        : 0,
        total: localStorage.getItem('subtotal') 
        ? Number(localStorage.getItem('subtotal'))
        : 0
        /* cart: [],
        cartCount: 0,
        total: 0 */
    }},
    reducers: {
        addToCart: (state, action) => {

         let cartItem = state.value.cart.find((item) => item.id === action.payload.id);

            /* console.log('BEFORE');
            console.log(state.value.cart);
            console.log(state.value.cartCount);
            console.log(state.value.total);
            console.log(action.payload.quantity);
            console.log(action.payload.price); */

            if(cartItem) {
                state.value.cart = [...state.value.cart];
                cartItem.quantity += action.payload.quantity;
                state.value.cartCount += action.payload.quantity;
                state.value.total += (action.payload.price * action.payload.quantity);
            }
            else {
                state.value.cart = [...state.value.cart, action.payload];
                state.value.cartCount += action.payload.quantity;
                state.value.total += (action.payload.price * action.payload.quantity);
            }

            /* console.log('AFTER');
            console.log(state.value.cart);
            console.log(state.value.cartCount);
            console.log(state.value.total);
            console.log(action.payload.quantity);
            console.log(action.payload.price); */

            localStorage.setItem('cartItems', JSON.stringify(state.value.cart));
            localStorage.setItem('cartCount', state.value.cartCount);
            localStorage.setItem('subtotal', state.value.total); 
        },

        incCartQty: (state, action) => {
            let cartItem = state.value.cart.find((item) => item.id === action.payload.id);

            state.value.cart = [...state.value.cart];
            cartItem.quantity = action.payload.quantity;
            state.value.cartCount += 1;
            state.value.total += cartItem.price;

            localStorage.setItem('cartItems', JSON.stringify(state.value.cart));
            localStorage.setItem('cartCount', state.value.cartCount); 
            localStorage.setItem('subtotal', state.value.total);
        },

        decCartQty: (state, action) => {
            let cartItem = state.value.cart.find((item) => item.id === action.payload.id);

            state.value.cart = [...state.value.cart];
            cartItem.quantity = action.payload.quantity;
            state.value.cartCount -= 1;
            state.value.total -= cartItem.price;

            localStorage.setItem('cartItems', JSON.stringify(state.value.cart));
            localStorage.setItem('cartCount', state.value.cartCount); 
            localStorage.setItem('subtotal', state.value.total);
        },

        removeFromCart: (state, action) => {
            const updatedCart = state.value.cart.filter((item) => item.id !== action.payload.id);
            
            state.value.cart = updatedCart;
            state.value.cartCount -= action.payload.quantity;
            state.value.total -= (action.payload.price * action.payload.quantity);

            localStorage.setItem('cartItems', JSON.stringify(state.value.cart));
            localStorage.setItem('cartCount', state.value.cartCount); 
            localStorage.setItem('subtotal', state.value.total);
        }
    }
})

export const { addToCart, incCartQty, decCartQty, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;