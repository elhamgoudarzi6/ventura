import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price: number; // قیمت واحد محصول
    quantity: number; // تعداد محصول در سبد خرید
    image: string;
    totalPrice: number; // قیمت کل محصول (price * quantity)
}

interface CartState {
    items: CartItem[];
    totalAmount: number; // مجموع کل قیمت سبد خرید
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity" | "totalPrice">>) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
                state.items[itemIndex].totalPrice = state.items[itemIndex].price * state.items[itemIndex].quantity;
            } else {
                state.items.push({ 
                    ...action.payload, 
                    quantity: 1, 
                    totalPrice: action.payload.price 
                });
            }

            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);

            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },

        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                if (action.payload.quantity <= 0) {
                    // حذف محصول در صورتی که تعداد آن صفر شد
                    state.items.splice(itemIndex, 1);
                } else {
                    state.items[itemIndex].quantity = action.payload.quantity;
                    state.items[itemIndex].totalPrice = state.items[itemIndex].price * state.items[itemIndex].quantity;
                }
            }

            // محاسبه مجدد مجموع کل سبد خرید
            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },

        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
