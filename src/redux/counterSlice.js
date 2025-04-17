import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    step: 1
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Pure function: không trực tiếp thay đổi state (immer xử lý)
            return { ...state, count: state.count + state.step };
        },
        decrement: (state) => {
            return { ...state, count: state.count - state.step };
        },
        setStep: (state, action) => {
            return { ...state, step: action.payload };
        },
        reset: () => initialState
    }
});

export const { increment, decrement, setStep, reset } = counterSlice.actions;
export default counterSlice.reducer;
