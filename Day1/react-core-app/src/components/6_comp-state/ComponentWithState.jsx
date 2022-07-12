import React, { Component } from 'react';

class ComponentWithState extends Component {
    state = { name: "Synechron" };
    
    // constructor() {
    //     super();

    //     // State must be initialized in the constructor
    //     // State must be set to an object or null
    //     this.state = { name: "Synechron" };

    //     console.log("Ctor, State: ", this.state);
    // }

    render() {
        console.log("Render, State: ", this.state);
        return (
            <>
                <h2 className="text-primary">Component With State</h2>
                <h2 className="text-primary">Hello, {this.state.name}</h2>
            </>
        );
    }
}

export default ComponentWithState;