import React, { useCallback } from 'react';
import CounterComponent from '../../components/counter/CounterComponent';
import CounterSiblingComponent from '../../components/counter/CounterSiblingComponent';

import { useDispatch, useSelector } from 'react-redux';

import * as counterActions from '../../actions/counterActions';

const FunctionCounter = () => {
    const count = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    const increment = useCallback((by) => dispatch(counterActions.incCounter(by)), []);
    const decrement = useCallback((by) => dispatch(counterActions.decCounter(by)), []);
    const multiply = useCallback((by) => dispatch(counterActions.mulCounter(by)), []);

    return (
        <div>
            {/* <CounterComponent count={count}
                inc={(by) => dispatch(counterActions.incCounter(by))}
                dec={(by) => dispatch(counterActions.decCounter(by))}
                mul={(by) => dispatch(counterActions.mulCounter(by))} /> */}
            
            <CounterComponent count={count}
                inc={increment}
                dec={decrement}
                mul={multiply} />
            
            <hr />
            
            <CounterSiblingComponent count={count} />
        </div>
    );
};

export default FunctionCounter;