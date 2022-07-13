/* eslint-disable */

import React from 'react';
import ClassVsFunctionalComponent from '../1_class-vs-function/ClassVsFunctionalComponent';
import LCDemoComponent from '../2_lifecycle-demo/LCDemoComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <ClassVsFunctionalComponent /> */}
            <LCDemoComponent />
        </div>
    );
};

export default RootComponent;