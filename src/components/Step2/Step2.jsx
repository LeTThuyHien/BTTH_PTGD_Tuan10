import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/counterSlice';


import "./Step2.css"
function Step2() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h2>Counter with Redux</h2>
            <h3>Count: {count}</h3>
            <div className='action-btn'>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>

        </div>
    );
}

export default Step2;
