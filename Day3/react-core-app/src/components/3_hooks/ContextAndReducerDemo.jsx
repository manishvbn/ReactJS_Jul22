import React from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';

const CounterContext = React.createContext();

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
    const context = useContext(CounterContext);

    return (
        <>
            <div className="text-center">
                <h3 className="text-primary">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-primary">
                        {context.counterState.count}
                    </h2>
                </div>
                <button className="btn btn-primary"
                    onClick={(e) => { context.counterDispatch({ type: "increment" }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary"
                    onClick={(e) => { context.counterDispatch({ type: "decrement" }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
};

const CounterSibling = () => {
    const context = useContext(CounterContext);

    return (
        <>
            <div className="text-center">
                <h3 className="text-success">Counter Sibling Component</h3>
                <h2>Current Count is: {context.counterState.count}</h2>
            </div>
        </>
    );
};

const ContextAndReducerHookDemo = () => {
    const [count, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider
            value={{ counterState: count, counterDispatch: dispatch }}>
            <h2 className='text-info text-center'>Context And Reducer Hook</h2>
            <Counter />
            <hr />
            <CounterSibling />
        </CounterContext.Provider>
    );
};

export default ContextAndReducerHookDemo;