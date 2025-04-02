import { add, subtract, multiply, divide } from './calculations';

describe('Hexadecimal Calculator Functions', () => {
  test('adds two hexadecimal numbers', () => {  
    expect(add('A', '5')).toBe('F');
    expect(add('1F', '1')).toBe('20');
  });

  test('subtracts two hexadecimal numbers (no negatives)', () => {
    expect(subtract('A', '5')).toBe('5');
    expect(subtract('10', '10')).toBe('0');
  });

  test('multiplies two hexadecimal numbers', () => {
    expect(multiply('A', '2')).toBe('14');
    expect(multiply('F', 'F')).toBe('E1');
  });

  test('divides two hexadecimal numbers (no decimals)', () => {
    expect(divide('A', '2')).toBe('5');
    expect(divide('10', '3')).toBe('5');
  });

  test('handles input limits correctly', () => {
    expect(add('FF', '1')).toBe('100');
  });

  test('throws error on negative result', () => {
    expect(() => subtract('5', 'A')).toThrow('Negative result not allowed');
  });

  test('throws error on division by zero', () => {
    expect(() => divide('A', '0')).toThrow('Cannot divide by zero');
  });
});
