import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    count: number;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            const excisting = state.items.find(i => i.id === action.payload);
            if (!excisting ) {
                state.items.push({ id: action.payload, count: 1 });
                return;
            } else {
                state.items.map(i => {
                    if (i.id === action.payload) {
                        i.count++;
                    }
                    return i;
                })
            }
        }
    },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;