import React, { Component } from 'react';

// const DataHOC = function (InputComponent) {
//     return class extends Component {
//         componentDidMount() {
//             this.setState({ data: "Data from DataHOC" });
//         }

//         render() {
//             return <InputComponent {...this.state} {...this.props} />
//         }
//     }
// };

// const DataHOC = (InputComponent) => {
//     return class extends Component {
//         componentDidMount() {
//             this.setState({ data: "Data from DataHOC" });
//         }

//         render() {
//             return <InputComponent {...this.state} {...this.props} />
//         }
//     }
// };

const DataHOC = (InputComponent) => class extends Component {
    componentDidMount() {
        this.setState({ data: "Data from DataHOC" });
    }

    render() {
        return <InputComponent {...this.state} {...this.props} />
    }
}

export default DataHOC;