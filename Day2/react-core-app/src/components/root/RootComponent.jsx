/* eslint-disable */

import React from 'react';
import ClassVsFunctionalComponent from '../1_class-vs-function/ClassVsFunctionalComponent';
import LCDemoComponent from '../2_lifecycle-demo/LCDemoComponent';
import PureImpureComponent from '../3_pure-vs-impure/PureImpureComponent';
import EventComponent from '../4_synthetic-events/EventComponent';
import CounterAssignment from '../5_counter-assignment/CounterAssignment';
import ControlledVsUncontrolledComponent from '../6_controlled-vs-uncontrolled/ControlledVsUncontrolledComponent';
import CalculatorAssignment from '../7_calculator-assignment/CalculatorAssignment';
import ListRoot from '../8_list/ListComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <ClassVsFunctionalComponent /> */}
            {/* <LCDemoComponent /> */}
            {/* <PureImpureComponent /> */}
            {/* <EventComponent /> */}
            {/* <CounterAssignment /> */}
            {/* <ControlledVsUncontrolledComponent /> */}
            {/* <CalculatorAssignment /> */}
            <ListRoot />
        </div>
    );
};

export default RootComponent;