import React from "react";

const Child2 = ({ selectedOption, setSelectedOption }) => {
    return (
        <div className="child2">
            <h1>Child Component 2</h1>
            <button onClick={() => setSelectedOption("Option 2")}>Option 2</button>
        </div>
    )

}
export default Child2;