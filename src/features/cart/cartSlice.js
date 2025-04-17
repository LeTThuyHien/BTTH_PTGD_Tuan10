// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        // Nếu sản phẩm đã có trong giỏ, tăng số lượng
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          quantity: state.cartItems[itemIndex].quantity + action.payload.quantity,
        };
      } else {
        // Nếu chưa có, thêm sản phẩm mới vào giỏ
        state.cartItems.push(action.payload);
      }
    },

    // Xóa sản phẩm khỏi giỏ
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

    // Cập nhật số lượng sản phẩm
    updateQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
