
import React, { useState } from "react";
import Child1 from "../components/Child1";
import Child2 from "../components/Child2";
import './../styles/App.css';

const App = () => {
  let [selectedOption, setSelectedOption] = useState();
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child1 selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Child2 selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
