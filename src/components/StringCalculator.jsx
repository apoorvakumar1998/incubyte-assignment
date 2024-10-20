import React, { useState } from 'react';
import { add } from '../utils/Calculator';

function StringCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <div>
        <textarea style={{ height: '100px' }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
        />
      </div>
      <button onClick={handleSubmit}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
      {error && <h2 style={{ color: 'red' }}>Error: {error}</h2>}
    </div>
  );
}

export default StringCalculator;
