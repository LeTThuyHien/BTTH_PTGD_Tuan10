import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import counterReducer2 from '../redux/redux2/counterSlice';
import todoReducer from "../features/todos/todoSlice";

const store = configureStore({
    reducer: {
        counter1: counterReducer,
        counter2: counterReducer2,
        todos: todoReducer
    }
});

export default store;
