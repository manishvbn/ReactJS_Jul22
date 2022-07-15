import React, { Component } from 'react';
import DataHOC from './DataHOC';

class HOCDemoComponentTwo extends Component {
    render() {
        return (
            <div className='mt-5'>
                <h1 className="text-info">Higher Order Component Demo Two</h1>
                <h2 className="text-success">
                    Some Data, given using props: {this.props.data}
                </h2>
            </div>
        );
    }
}

export default DataHOC(HOCDemoComponentTwo);