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

// import Employee from './js-query/Employee';

// var e1 = new Employee("Manish");
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// var e2 = new Employee("Subodh");
// console.log(e2.getName());
// e2.setName("Ramakant");
// console.log(e2.getName());

// console.log(e1);
// console.log(e2);