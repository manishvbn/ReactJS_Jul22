import React from 'react';
import MyImpureComponent from './MyImpureComponent';
import MyPureComponent from './MyPureComponent';

const PureImpureComponent = () => {
    return (
        <div className='text-center'>
            {/* <MyImpureComponent /> */}
            <MyPureComponent />
        </div>
    );
};

export default PureImpureComponent;