// import React, { Component } from 'react';

// // const DataHOC = function (InputComponent) {
// //     return class extends Component {
// //         componentDidMount() {
// //             this.setState({ data: "Data from DataHOC" });
// //         }

// //         render() {
// //             return <InputComponent {...this.state} {...this.props} />
// //         }
// //     }
// // };

// // const DataHOC = (InputComponent) => {
// //     return class extends Component {
// //         componentDidMount() {
// //             this.setState({ data: "Data from DataHOC" });
// //         }

// //         render() {
// //             return <InputComponent {...this.state} {...this.props} />
// //         }
// //     }
// // };

// const DataHOC = (InputComponent) => class extends Component {
//     componentDidMount() {
//         this.setState({ data: "Data from DataHOC" });
//     }

//     render() {
//         return <InputComponent {...this.state} {...this.props} />
//     }
// }

// export default DataHOC;

// ------------------------------------
import { useState } from "react";

const DataHOC = (InputComponent) => {
    const Wrapper = (props) => {
        const [state] = useState({ data: "Data from DataHOC" });
        return <InputComponent {...state} {...props} />
    }

    Wrapper.displayName = "DataHOC";

    return Wrapper;
}

export default DataHOC;