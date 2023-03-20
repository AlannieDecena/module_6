import React from "react"

function HookWeather() {

    const [weather, setWeather] = React.useState('sunny')
    const [temperature, settemperature] = React.useState(27)
    const [forecast, setforecast] = React.useState('scattered showers')

    const weatherOptions = ['sunny', 'windy', 'cloudy', 'snowing', 'raining', 'hail'];

    const sunShines = () => {
        setWeather('sunny')
        settemperature(temperature+5)
        // settemperature(oldTemperature => oldTemperature +5)
        
    }

    const windBlows = () => {
        setWeather('windy')
        settemperature(temperature-5)
        
    }

    const changeWeather = () => {
        let oldWeatherIndex = weatherOptions.indexOf(weather)
        let newWeatherIndex = oldWeatherIndex === (weatherOptions.length-1) ? 0 : oldWeatherIndex + 1;

        let newWeather = weatherOptions[newWeatherIndex]
        setWeather (newWeather);
        
    }

    return (
        <div className="Weather componentBox">
            <h2>Hook Weather</h2>
            <div>Weather Today: {weather}. Temp is {temperature}&deg;C</div>
            <div>Weather Tomorrow: {forecast}</div>
            

            {/* what happens if the onclick isn't wrapped in an arrow function? */}
            <button onClick={() => windBlows()}>Wind Blows</button>{/* we can use event listeners like onClick, onSubmit, onChange but they need to be camelcased */}
            <button onClick={() => sunShines()}>Sun Shines</button>
            <button onClick={() => changeWeather()}>Change Weather</button>
        </div>
    )

}

export default HookWeather