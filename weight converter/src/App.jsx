import { useState } from 'react';
import './App.css';

export default function App() {
  const [weightInPounds, setWeightInPounds] = useState("");
  const [weightInKg, setWeightInKg] = useState("");

  function convertWeight(event) {
    const weight = event.target.value;
    setWeightInPounds(weight);
    const weightInKg = (weight * 0.45359237).toFixed(2);
    setWeightInKg(weightInKg);
  }

  return (
    <div className="content-holder">
      <div className="heading">
        <h1>Weight Converter</h1>
      </div>

      <div className="input-field">
        <label htmlFor="weight">Pounds: </label>
        <input
          onChange={convertWeight}
          type="number"
          name="weight"
          placeholder="Enter a number"
          value={weightInPounds}
        />
      </div>

      <div className="output">
        <p className="output-text">Your weight in kg is: {weightInKg}</p>
      </div>
    </div>
  );
}
