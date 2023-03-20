import React from "react";

class LabGreeting extends React.Component {

    constructor(props) {
        super(props);

        this.state = { text: 'Hello World Again'}
    }

    changeText() {
        this.setState({text: 'Hello ' + this.props.name})
    }

  
    render() {
        const name = JSON.stringify(this.props);

        // Lab Ex 2
        return (

            <div className="componentBox">
            <h2>{this.state.text}</h2>
             <h2>Hello {this.props.name}</h2>
             <button onClick={() => this.changeText()}>button</button>
             </div>
        );
            // Lab Ex 1
        // return (
        //     <div className="componentBox">
        //     <h1>Hello World Again</h1>
        //      <h2>Hello {this.props.name}</h2>
        //      </div>
        // );
    }
}

export default LabGreeting