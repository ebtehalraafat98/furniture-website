// src/redux/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.items.find(i => i.id === item.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
            state.totalQuantity += 1;
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) {
                state.totalQuantity -= item.quantity;
                state.items = state.items.filter(i => i.id !== id);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
        }
    },
});

export const { addToCart, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;