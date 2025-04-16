import React, { useReducer } from 'react';

import "./Step1.css"
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

const initialState = 0;

function Step1() {
    const [count, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div className='container'>
            <h2>Counter with useReducer</h2>
            <h3>Giá trị: {count}</h3>
            <div className='action-btn'>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            </div>

        </div>
    );
}

export default Step1;
