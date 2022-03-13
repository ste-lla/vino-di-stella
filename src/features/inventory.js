
import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {value: {
        inventory: [
            {id: 1, name: 'Barolo', type: 'red', price: 95, quantity: 20},
            {id: 2, name: 'Pinot Grigio', type: 'white', price: 65, quantity: 15},
            {id: 3, name: 'Brunello di Montalcino', type: 'red', price: 85, quantity: 8},
            {id: 4, name: 'Tuscan Vernaccia', type: 'red', price: 80, quantity: 5}
        ]
    }},
    reducers: {

    }
})

export default inventorySlice.reducer;