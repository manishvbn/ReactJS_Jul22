// import React from 'react';

// const CounterComponent = (props) => {
//     return (
//         <>
//             <div className="text-center">
//                 <h1 className="text-info">Counter Component</h1>
//             </div>
//             <div className="d-grid gap-2 mx-auto col-6">
//                 <h2 className="text-primary text-center">
//                     {props.count}
//                 </h2>
//                 <button className="btn btn-primary" onClick={
//                     (e) => {
//                         props.inc(2);
//                     }
//                 }>
//                     <span className='fs-4'>+</span>
//                 </button>
//                 <button className="btn btn-primary" onClick={
//                     (e) => {
//                         props.dec(2);
//                     }
//                 }>
//                     <span className='fs-4'>-</span>
//                 </button>
//                 <button className="btn btn-primary" onClick={
//                     (e) => {
//                         props.mul(2);
//                     }
//                 }>
//                     <span className='fs-4'>*</span>
//                 </button>
//             </div>
//         </>
//     );
// };

// export default CounterComponent;

// ------------------------------------------
import React from 'react';
import * as counterActions from '../../actions/counterActions';
import { useDispatch } from 'react-redux';

const CounterComponent = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <h2 className="text-primary text-center">
                    {props.count}
                </h2>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        dispatch(counterActions.incCounter(2));
                    }
                }>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        dispatch(counterActions.decCounter(2));
                    }
                }>
                    <span className='fs-4'>-</span>
                </button>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        dispatch(counterActions.mulCounter(2));
                    }
                }>
                    <span className='fs-4'>*</span>
                </button>
            </div>
        </>
    );
};

export default CounterComponent;