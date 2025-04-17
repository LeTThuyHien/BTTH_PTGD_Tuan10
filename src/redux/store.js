import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import counterReducer2 from '../redux/redux2/counterSlice';
import todoReducer from "../features/todos/todoSlice";
import themeReducer from "../features/theme/themeSlice";
import cartReducer from '../features/cart/cartSlice';



const store = configureStore({
    reducer: {
        counter1: counterReducer,
        counter2: counterReducer2,
        todos: todoReducer,
        theme: themeReducer,
        cart: cartReducer,

    }
});

export default store;
