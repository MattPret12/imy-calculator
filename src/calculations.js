function toHex(num) {
  return num.toString(16).toUpperCase();
}

function fromHex(hex) {
  if (!/^[0-9A-F]{1,2}$/i.test(hex)) {
    throw new Error('Invalid hex input');
  }
  return parseInt(hex, 16);
}

function validateInput(hex) {
  if (hex.length > 2) throw new Error('Input exceeds 2 hex digits');
  if (!/^[0-9A-F]+$/i.test(hex)) throw new Error('Invalid hex input');
}

function validateOutput(result) {
  const hex = toHex(result);
  if (hex.length > 4) throw new Error('Output exceeds 4 hex digits');
  return hex;
}

export function add(a, b) {
  validateInput(b);
  validateInput(a);
  const result = fromHex(a) + fromHex(b);
  return validateOutput(result);
}

export function subtract(a, b) {
  validateInput(a);
  validateInput(b);
  const result = fromHex(a) - fromHex(b);
  if (result < 0) throw new Error('Negative result not allowed');
  return validateOutput(result);
}

export function multiply(a, b) {
  validateInput(a);
  validateInput(b);
  const result = fromHex(a) * fromHex(b);
  return validateOutput(result);
}

export function divide(a, b) {
  validateInput(a);
  validateInput(b);
  const divisor = fromHex(b);
  if (divisor === 0) throw new Error('Cannot divide by zero');
  const result = Math.floor(fromHex(a) / divisor);
  return validateOutput(result);
}


