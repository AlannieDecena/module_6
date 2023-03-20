import React from "react";
class PropsDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props);

        return (
            <div className="componentBox">
                <h1>Props Displayer</h1>
                <h2>{stringProps}</h2>
                <p>Name: {this.props.name}</p>
                <p>Location: {this.props.location}</p>
                <p>Number: {this.props.number}</p>
            </div>
        );
    }
}

export default PropsDisplayer