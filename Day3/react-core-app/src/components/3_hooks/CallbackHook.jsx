// import React from 'react';
// import { useState } from 'react';

// const Counter = (props) => {
//     console.log('Counter rendered : ', props.children);
//     return (
//         <button className='btn btn-primary' onClick={props.handleClick}>
//             {props.children}
//         </button>
//     );
// };

// const CallbackHook = () => {
//     const [incCount, setIncrement] = useState(0);
//     const [mulCount, setMultiplier] = useState(2);

//     const increment = () => { setIncrement(incCount + 1); }

//     const multiply = () => { setMultiplier(mulCount * 2); }

//     return (
//         <div className='text-center mt-5'>
//             <h2 className="text-primary">
//                 {incCount}
//             </h2>
//             <Counter handleClick={increment}>
//                 Incrementer
//             </Counter>
//             <hr />
//             <h2 className="text-primary">
//                 {mulCount}
//             </h2>
//             <Counter handleClick={multiply}>
//                 Multiplier
//             </Counter>
//         </div>
//     );
// };

// export default CallbackHook;

// -----------------------------------------------------

import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

// React.memo is a HOC, that prevents a component from re-rendering 
// if the props (or values within it) have not changed.
const Counter = React.memo((props) => {
    console.log('Counter rendered : ', props.children);
    return (
        <button className='btn btn-primary' onClick={props.handleClick}>
            {props.children}
        </button>
    );
});

const CallbackHook = () => {
    const [incCount, setIncrement] = useState(0);
    const [mulCount, setMultiplier] = useState(2);

    const increment = useCallback(
        () => { setIncrement(incCount + 1); }, [incCount]
    )

    const multiply = useCallback(
        () => { setMultiplier(mulCount * 2); }, [mulCount]
    )

    // const increment = () => { setIncrement(incCount + 1); }

    // const multiply = () => { setMultiplier(mulCount * 2); }

    return (
        <div className='text-center mt-5'>
            <h2 className="text-primary">
                {incCount}
            </h2>
            <Counter handleClick={increment}>
                Incrementer
            </Counter>
            <hr />
            <h2 className="text-primary">
                {mulCount}
            </h2>
            <Counter handleClick={multiply}>
                Multiplier
            </Counter>
        </div>
    );
};

export default CallbackHook;