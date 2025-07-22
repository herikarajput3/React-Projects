import React from 'react'

const Counter = () => {
    return (
        <>
            <div className="text-7xl">
                Counter with Undo/Redo
            </div>
            <div className="text-5xl mt-5 font-bold">0</div>
            <div className="flex justify-center align-center gap-5 mt-5">
                <button>+</button>
                <button>-</button>
            </div>
        </>
    )
}

export default Counter