import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
// import counterReducer2 from '../redux/redux2/counterSlice';


const store = configureStore({
    reducer: {
        counter1: counterReducer,
        // counter2: counterReducer2
    }
});

export default store;
