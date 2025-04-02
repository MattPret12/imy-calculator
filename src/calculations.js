function toHex(num) {
    return num.toString(16).toUpperCase();
  }
  
  function fromHex(hex) {
    return parseInt(hex, 16);
  }
  
  export function add(a, b) {
    const result = fromHex(a) + fromHex(b);
    return toHex(result);
  }
  
  export function subtract(a, b) {
    const result = fromHex(a) - fromHex(b);
    if (result < 0) throw new Error('Negative result not allowed');
    return toHex(result);
  }
  
  export function multiply(a, b) {
    const result = fromHex(a) * fromHex(b);
    return toHex(result);
  }
  
  export function divide(a, b) {
    const divisor = fromHex(b);
    if (divisor === 0) throw new Error('Cannot divide by zero');
    const result = Math.floor(fromHex(a) / divisor);
    return toHex(result);
  }
  