import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import RootComponent from './components/root/RootComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RootComponent />
  // </React.StrictMode>
);

// ---------------------------------------- JavaScript Functions
// var i = 10;
// console.log(i);
// console.log(typeof i);

// var fn = function() {
//   console.log("Hello World!");
// };
// console.log(fn);
// console.log(typeof fn);

// Function is a type in JavaScript, which can refer to a block of code (Delegates) - Function Pointers

// Can we create a variable of type number?
// If yes, We can create a variable of type funtion also

// Can we create a variable of type number inside a function?
// If yes, We can create a variable of type funtion inside function also (Nested Functions)

// Can we return a variable of type number from a function?
// If yes, We can return a variable of type funtion from function also (Closures / HOF / Fn Currying)

// Can we pass a variable of type number to a function?
// If yes, We can pass a variable of type funtion to a function also (Callbacks)

// function fnFactory() {
//   return function () {
//     console.log("Hello World!");
//   };
// }

// var fn1 = fnFactory();
// console.log(fn1);

// var fn2 = fnFactory();
// console.log(fn2);

// console.log(fn1 === fn2);