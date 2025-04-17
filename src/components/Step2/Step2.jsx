import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setStep, reset } from '../../redux/counterSlice';

function Step2() {
    const { count, step } = useSelector((state) => state.counter1);
    const dispatch = useDispatch();

    return (
        <div className='step2-container'>
            <h2>Step2: Counter with Step (Redux + Pure Reducer)</h2>
            <p>Count: {count}</p>
            <p>Step: {step}</p>

            <div className='action-btn'>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>

            <div style={{ margin: '10px' }}>
                <label>Set Step: </label>
                <input
                    className='input-btn'
                    style={{ padding: '8px' }}
                    type="number"
                    value={step}
                    onChange={(e) =>
                        dispatch(setStep(parseInt(e.target.value) || 1))
                    }
                />
            </div>
        </div >
    );
}

export default Step2;
