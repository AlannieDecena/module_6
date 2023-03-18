import React from "react";

class Greeting extends React.Component {
    render() {
        const name = JSON.stringify(this.props);
        return (
            <div>
            <h1>Hello World Again</h1>
             <h2>Hello {this.props.name}</h2>
             </div>
        );
    }
}

export default Greeting