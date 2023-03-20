import React from "react";

class Example extends React.Component {

    constructor(props) {

        // React components always have to
        // call super in their constructors
        // to be set up properly
        super(props);

        // this.state should be an object
        // representing the initial “state”
        // of any component instance
        this.state = {
            mood: 'great',
            hungry: false
        };
    }

    getHungry() {
        this.setState({ hungry: true})
    }

    render() {
        return <div className="componentBox">
            <h2>State Example</h2>
            <p>mood: {String(this.state.mood)}</p>
            <p>hungry: {String(this.state.hungry)}</p>

            <button onClick={() => this.getHungry()}>Getting hungry</button>
            
            </div>;
    }
}

export default Example