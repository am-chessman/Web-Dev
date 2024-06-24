import { useState } from 'react'
import './App.css'

export default function App() {
  const [temp, setTemp] = useState({ celcius: '', fahrenheit: '', kelvin: '' });

  const convertFromCelsius = (value) => {
    const celcius = parseFloat(value);
    if (isNaN(celcius)) {
      setTemp({ celcius: '', fahrenheit: '', kelvin: '' });
      return;
    }
    const fahrenheit = (celcius * 9/5) + 32;
    const kelvin = celcius + 273.15;
    setTemp({ celcius, fahrenheit, kelvin });
  };

  const convertFromFahrenheit = (value) => {
    const fahrenheit = parseFloat(value);
    if (isNaN(fahrenheit)) {
      setTemp({ celcius: '', fahrenheit: '', kelvin: '' });
      return;
    }
    const celcius = (fahrenheit - 32) * 5/9;
    const kelvin = celcius + 273.15;
    setTemp({ celcius, fahrenheit, kelvin });
  };

  const convertFromKelvin = (value) => {
    const kelvin = parseFloat(value);
    if (isNaN(kelvin)) {
      setTemp({ celcius: '', fahrenheit: '', kelvin: '' });
      return;
    }
    const celcius = kelvin - 273.15;
    const fahrenheit = (celcius * 9/5) + 32;
    setTemp({ celcius, fahrenheit, kelvin });
  };

  return (
    <div className='temperature-card'>
      <h1>Temperature Converter</h1>
      <div className="input-fields">
        <div className="field">
          <label htmlFor="Celcius">Celcius: </label>
          <input 
            onChange={(e) => convertFromCelsius(e.target.value)} 
            type="number" 
            placeholder='Enter temperature' 
            value={temp.celcius}
          />
        </div>

        <div className="field">
          <label htmlFor="fahrenheit">Fahrenheit: </label>
          <input 
            onChange={(e) => convertFromFahrenheit(e.target.value)} 
            type="number" 
            placeholder='Enter temperature' 
            value={temp.fahrenheit}
          />
        </div>

        <div className="field">
          <label htmlFor="kelvin">Kelvin: </label>
          <input 
            onChange={(e) => convertFromKelvin(e.target.value)} 
            type="number" 
            placeholder='Enter temperature' 
            value={temp.kelvin}
          />
        </div>
      </div>
    </div>
  )
}
