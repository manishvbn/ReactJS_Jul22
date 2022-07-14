import React, { useEffect, useState, useRef } from 'react';

const EffectHookAssignmentDemo = () => {
    // console.log("Counter Rendered.....");

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    // const [clickCount, setClickCount] = useState(0);

    // useEffect(() => {
    //     if (count === 0) return;
    //     setClickCount(clickCount + 1);
    //     if (clickCount > 9) {
    //         setFlag(true);
    //     }
    //     console.log("useEffectExecuted: ", clickCount);
    // }, [count]);

    // let clickCount = 0;

    // useEffect(() => {
    //     if (count === 0) return;
    //     clickCount += 1;
    //     if (clickCount > 9) {
    //         setFlag(true);
    //     }
    //     console.log("useEffectExecuted: ", clickCount);
    // }, [count]);

    // const clickCount = useRef(0);

    // useEffect(() => {
    //     if (count === 0) return;
    //     clickCount.current += 1;
    //     if (clickCount.current > 9) {
    //         setFlag(true);
    //     }
    //     console.log("useEffectExecuted: ", clickCount);
    // }, [count]);

    const clickCount = useRef(0);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            clickCount.current += 1;
            if (clickCount.current > 9) {
                setFlag(true);
            }
            console.log("useEffectExecuted: ", clickCount);
        }
    }, [count]);

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-info">{count}</h2>
                </div>
                <button className="btn btn-info" disabled={flag}
                    onClick={e => { setCount(count + 1); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info" disabled={flag}
                    onClick={e => { setCount(count - 1); }}>
                    <span className='fs-4'>-</span>
                </button>
                <button className="btn btn-info" disabled={!flag}
                    style={!flag ? { cursor: 'not-allowed', pointerEvents: 'all' } : {}}
                    onClick={e => { reset(e); }}>
                    <span className='fs-4'>Reset</span>
                </button>
            </div>
        </>
    );

    function reset(e) {
        setCount(0);
        setFlag(false);
        clickCount.current = 0;
    }
};

export default EffectHookAssignmentDemo;