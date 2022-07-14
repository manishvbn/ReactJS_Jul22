// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const EffectHookDemo = () => {
//     const [flag, setFlag] = useState(false);
//     const [person, setPerson] = useState({ fname: "Manish", lname: "Sharma" });

//     // // With second parameter as empty array, useEffect behaves like ComponentDidMount()
//     // useEffect(() => {
//     //     console.log("useEffect is called, on mounting...");
//     // }, []);

//     // Without second parameter, useEffect behaves like ComponentDidUpdate()
//     // But will also be excuted when component mounts (ComponentDidMount)
//     useEffect(() => {
//         console.log("useEffect is called, whenever any state updates...");
//     });

//     // useEffect(() => {
//     //     console.log("useEffect is called, whenever flag updates...");
//     // }, [flag]);

//     // ComponentWillUnmount()
//     // useEffect(() => {
//     //     // Anything in here is fired on component mount
//     //     console.log("useEffect is called, on mounting...");
//     //     return () => {
//     //         // Anything in here is fired on component unmount
//     //         console.log("This fn is executed, on unmounting...");
//     //     }
//     // }, []);

//     return (
//         <div>
//             <h3 className="text-primary">Firstname: {person.fname}</h3>
//             <h3 className="text-primary">Lastname: {person.lname}</h3>

//             <h3 className="text-primary">{flag}</h3>
//             <button className='btn btn-primary' onClick={e => { setPerson({ fname: "Abhijeet", lname: "Gole" }) }}>
//                 Click to Change Person
//             </button>
//             <button className='btn btn-primary' onClick={e => { setFlag(!flag) }}>
//                 Click to Change Flag
//             </button>
//         </div>
//     );
// };

// export default EffectHookDemo;