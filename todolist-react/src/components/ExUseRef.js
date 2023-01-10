import React, { useState, useRef } from 'react'

export default function ExUseRef() {
    let timeId = useRef();
    const [time, setTime] = useState(60);
    const handleStart = () => {
        timeId.current = setInterval(() => {
            setTime(preTime => preTime - 1);
        }, 1000);
        console.log("start time: " + timeId.current);
    }
    const handleStop = () => {
        clearInterval(timeId.current);
        console.log("stop time: " + timeId.current);

    }
    return (
        <div>
            <h2>Rikkei oclock</h2>
            <p>Clock: {time}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
