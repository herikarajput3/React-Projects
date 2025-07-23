import React, { useState } from 'react'

const Counter = () => {
    const [history, setHistory] = useState([0]);
    const [position, setPosition] = useState(0);

    const currentValue = history[position];

    const addValueToHistory = (newValue) => {
        // remove previous history
        const newHistory = history.slice(0, position + 1);
        setHistory([...newHistory, newValue]);
        setPosition(position + 1);
        // console.log("New history", newHistory);
        // console.log("History", history);
        // console.log("position", position);
        // console.log("currentValue", currentValue);

    }

    const increment = () => {
        addValueToHistory(currentValue + 1);
    }

    const decrement = () => {
        addValueToHistory(currentValue - 1);
    }

    const undo = () => {
        setPosition(position - 1);
    }

    const redo = () => {
        setPosition(position + 1);
    }
    return (
        <>
            <div className="text-7xl">
                Counter with Undo/Redo
            </div>
            <div className="text-5xl mt-5 font-bold">{currentValue}</div>
            <div className="flex justify-center align-center gap-5 mt-5">
                <button onClick={increment} disabled={currentValue === 10}>+</button>
                <button onClick={decrement} disabled={currentValue === 0}>-</button>
            </div>
            <div className="flex justify-center align-center gap-5 mt-5">
                <button onClick={undo} disabled={position === 0}>Undo</button>
                <span className=' text-muted mt-2'>{position + 1}/{history.length}</span>
                <button onClick={redo} disabled={position === history.length - 1}>Redo</button>
            </div>
        </>
    )
}

export default Counter