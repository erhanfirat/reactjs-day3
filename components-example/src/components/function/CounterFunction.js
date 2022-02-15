import { useState, useEffect } from "react";

const CounterFunction = ({ time = 1000, increment = 10, className }) => {
    const [counter, setCounter] = useState(0);

    const timer = () => {
        setCounter(counter + increment);
    };

    useEffect(() => {
        const counterInterval = setInterval(timer, time);

        return () => {
            clearInterval(counterInterval);
        }
    });

    useEffect(() => {
        if (counter === 100) {
            // console.log("counter is 100");
        }
        return () => {
            if (counter === 100) {
                // console.log("counter is changing from 100");
            }
        }
    }, [counter])

    const resetCounter = (e) => {
        console.log("button click event >", e);
        setCounter(0);
    }

    return <div className={className}>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={resetCounter}>Reset</button>

    </div>
}

export default CounterFunction;