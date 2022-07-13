/* eslint-disable */

import React from 'react';
import ClassVsFunctionalComponent from '../1_class-vs-function/ClassVsFunctionalComponent';
import LCDemoComponent from '../2_lifecycle-demo/LCDemoComponent';
import PureImpureComponent from '../3_pure-vs-impure/PureImpureComponent';
import EventComponent from '../4_synthetic-events/EventComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <ClassVsFunctionalComponent /> */}
            {/* <LCDemoComponent /> */}
            {/* <PureImpureComponent /> */}
            <EventComponent />
        </div>
    );
};

export default RootComponent;