import React from 'react';
import CounterComponent from '../../components/counter/CounterComponent';
import CounterSiblingComponent from '../../components/counter/CounterSiblingComponent';

import { useSelector } from 'react-redux';

const FunctionCounter = () => {
    const count = useSelector(state => state.counterReducer);

    return (
        <div>
            <CounterComponent count={count} />
            <hr />
            <CounterSiblingComponent count={count} />
        </div>
    );
};

export default FunctionCounter;