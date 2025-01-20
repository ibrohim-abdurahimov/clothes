import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  title: string;
  price: number;
  urls: string[];
  size: string[]
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
}
const saveToLocalStorage = (state: CartState) => {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveToLocalStorage(state)
    },
    incrementItem: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(item => item.id === action.payload)
      if (existingItem) {
        existingItem.quantity += 1
      }
      saveToLocalStorage(state)
    },
    decrementItem: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(item => item.id === action.payload)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      }
      saveToLocalStorage(state)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      saveToLocalStorage(state)
    },
    clearCart: (state) => {
        state.items = [];
        saveToLocalStorage(state);
    },
  },
});

export const { addToCart, incrementItem, decrementItem, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;