import React from "react"
import "./Timer.css";

function Timer() {
    // create a state variable to hold a string representing the current time, default value '--:--:--' 
    const [time, setTime] = React.useState("--:--:--");

    // create a useEffect function to set the current time string once every second
    React.useEffect(() => {
        const updateTime = setInterval(() => timeNow(), 1000);
        return () => clearInterval(updateTime)
    })

    //create a function to create a string to represent the current time in the format hh:mm:ss and set the state variable
    const timeNow = () => {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime)
    }

    // render timer
    return (
        <div>
            {/* show current time in the centre of the screen with a large font size suitable for all screen sizes */}
            <h1 className="header-text">Current Time :</h1>
            <div data-testid="timer" className="timerStyle">{time}</div>
        </div>
    )
}

export default Timer;
