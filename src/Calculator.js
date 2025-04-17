import React, { useState } from 'react';
import './Calculator.css';
import { add, subtract, multiply, divide } from './calculations';

const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const operators = ['+', '-', '*', '/'];

const Calculator = () => {
  const [input, setInput] = useState('');
  const [firstOperand, setFirstOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleDigitClick = (digit) => {
    if (operator === '' && input.length < 2) {
      setInput((prev) => prev + digit);
    } else if (operator !== '' && input.split(operator)[1]?.length < 2) {
      setInput((prev) => prev + digit);
    }
  };

  const handleOperatorClick = (op) => {
    if (!input || operator) return;
    setFirstOperand(input);
    setOperator(op);
    setInput((prev) => prev + op);
  };

  const handleClear = () => {
    setInput('');
    setFirstOperand('');
    setOperator('');
    setResult('');
  };

  const handleEqual = () => {
    if (!firstOperand || !input || !operator) return;

    const parts = input.split(operator);
    const secondOperand = parts[1];

    try {
      let res;
      switch (operator) {
        case '+':
          res = add(firstOperand, secondOperand);
          break;
        case '-':
          res = subtract(firstOperand, secondOperand);
          break;
        case '*':
          res = multiply(firstOperand, secondOperand);
          break;
        case '/':
          res = divide(firstOperand, secondOperand);
          break;
        default:
          throw new Error('Invalid operator');
      }
      setResult(res);
    } catch (e) {
      setResult(e.message);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input" data-testid="input-display">{input || '0'}</div>
        <div className="result">{result && `= ${result}`}</div>
      </div>

      <div className="button-grid">
        {hexDigits.map((digit) => (
          <button key={digit} onClick={() => handleDigitClick(digit)}>
            {digit}
          </button>
        ))}
        {operators.map((op) => (
          <button key={op} onClick={() => handleOperatorClick(op)}>
            {op}
          </button>
        ))}
        <button className="equals" onClick={handleEqual}>=</button>
        <button className="clear" data-testid="clear-button" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;