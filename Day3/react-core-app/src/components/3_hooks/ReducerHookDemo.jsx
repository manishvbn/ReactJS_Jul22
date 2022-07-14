import React from 'react';
import { useReducer } from 'react';

const initialState = { count: 0 };

// Pure Function
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error('Invalid Action Executed...');
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-primary">{state.count}</h2>
                </div>
                <button className="btn btn-primary"
                    onClick={(e) => { dispatch({ type: 'increment' }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary"
                    onClick={(e) => { dispatch({ type: 'decrement' }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
};

const ReducerHookDemo = () => {
    return (
        <div>
            <Counter />
        </div>
    );
};

export default ReducerHookDemo;