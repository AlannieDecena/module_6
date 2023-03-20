import React from "react"

function HookExample() {


    const [hungry, setHungry] = React.useState(false)
    const [mood, setMood] = React.useState('great')

    const getHungry = () => {
        setHungry(true)
        setMood('hungry')

    }

    return (
        <div className="componentBox">

            <h2>Hook Example</h2>

            <p>mood: {mood}</p>
            <p>hungry: {String(hungry)}</p>

            <button onClick={() => getHungry()}>Getting hungry</button>

        </div>

    );
}



export default HookExample