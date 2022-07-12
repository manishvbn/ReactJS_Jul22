// import React, { Component } from 'react';

// class PropTypesComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <h2 className="text-info">Hello, {this.props.name.toUpperCase()}</h2>
//                 <h2 className="text-info">Age is, {this.props.age}</h2>
//             </div>
//         );
//     }

//     // static get defaultProps() {
//     //     return {
//     //         name: "na",
//     //         age: 0
//     //     };
//     // }
// }

// PropTypesComponent.defaultProps = {
//     name: "na",
//     age: 0
// };

// const PropTypesRoot = () => {
//     return (
//         <div className='text-center'>
//             <h2 className="text-primary text-center">Default Props Demo</h2>
//             <PropTypesComponent />
//             <PropTypesComponent name={"abhijeet"} />
//             <PropTypesComponent name={"abhijeet"} age={10} />
//         </div>
//     );
// };

// export default PropTypesRoot;

// ---------------------------------------------------------------------------
// npm i prop-types

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropTypesComponent extends Component {
    render() {
        return (
            <div>
                <h2 className="text-info">Hello, {this.props.name.toUpperCase()}</h2>
                <h2 className="text-info">Age is, {this.props.age}</h2>
            </div>
        );
    }

    // static get propTypes() {
    //     return {
    //         name: PropTypes.string.isRequired,
    //         age: PropTypes.number.isRequired
    //     }
    // }
}

PropTypesComponent.propTypes = {
    name: PropTypes.string.isRequired,
    // age: PropTypes.number.isRequired
    age: function(props, propName, componentName) {
        if(props[propName] < 20) {
            return new Error(`Invalid prop '${propName}', supplied to '${componentName}' - age must be greater than 20`)
        }
    }
}

const PropTypesRoot = () => {
    return (
        <div className='text-center'>
            <h2 className="text-primary text-center">Prop Types Validation</h2>
            {/* <PropTypesComponent /> */}
            <PropTypesComponent name={"Manish"} age={10} />
        </div>
    );
};

export default PropTypesRoot;