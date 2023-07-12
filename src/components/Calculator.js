import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Values from '../util/keyboard';
import Buttons from '../util/button';

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonHandler = (btn) => {
    setResult(calculate(result, btn));
  };

  return (
    <div className="calculator">
      <div className="result"><p>{result.next || result.operation || result.total || '0'}</p></div>
      {Values.map((value) => (
        <Buttons
          classN={value.class}
          onclick={(e) => buttonHandler(e.target.textContent)}
          input={value.key}
          key={value.id}
        />
      ))}
    </div>
  );
}

export default Calculator;
