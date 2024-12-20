import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const {name, image, cost} = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({name: name, image: image, cost: cost, costInt: parseInt(cost.substring(1)), quantity: 1});
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
        updateQuantity: (state, action) => {
            const {name, quantity} = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
    },
});

export const {addItem, removeItem, updateQuantity} = CartSlice.actions;

export default CartSlice.reducer;
