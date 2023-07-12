import React, { useState } from 'react';
import calculate from '../logic/calculate';
import buttons from '../util/keyboard';

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
        {buttons.map((button) => {
          
        })}
      <button type="button" className="AC" onClick={(e) => buttonHandler(e.target.textContent)}>AC</button>
      <button type="button" className="plusnsub" onClick={(e) => buttonHandler(e.target.textContent)}>+/-</button>
      <button type="button" className="percentage" onClick={(e) => buttonHandler(e.target.textContent)}>%</button>
      <button type="button" className="division orange" onClick={(e) => buttonHandler(e.target.textContent)}>÷</button>
      <button type="button" className="seven" onClick={(e) => buttonHandler(e.target.textContent)}>7</button>
      <button type="button" className="eight" onClick={(e) => buttonHandler(e.target.textContent)}>8</button>
      <button type="button" className="nine" onClick={(e) => buttonHandler(e.target.textContent)}>9</button>
      <button type="button" className="multi orange" onClick={(e) => buttonHandler(e.target.textContent)}>x</button>
      <button type="button" className="four" onClick={(e) => buttonHandler(e.target.textContent)}>4</button>
      <button type="button" className="five" onClick={(e) => buttonHandler(e.target.textContent)}>5</button>
      <button type="button" className="six" onClick={(e) => buttonHandler(e.target.textContent)}>6</button>
      <button type="button" className="substract orange" onClick={(e) => buttonHandler(e.target.textContent)}>-</button>
      <button type="button" className="one" onClick={(e) => buttonHandler(e.target.textContent)}>1</button>
      <button type="button" className="two" onClick={(e) => buttonHandler(e.target.textContent)}>2</button>
      <button type="button" className="three" onClick={(e) => buttonHandler(e.target.textContent)}>3</button>
      <button type="button" className="plus orange" onClick={(e) => buttonHandler(e.target.textContent)}>+</button>
      <button type="button" className="zeroo" onClick={(e) => buttonHandler(e.target.textContent)}>0</button>
      <button type="button" className="dott" onClick={(e) => buttonHandler(e.target.textContent)}>.</button>
      <button type="button" className="equal orange" onClick={(e) => buttonHandler(e.target.textContent)}>=</button>
    </div>
  );
}

export default Calculator;
