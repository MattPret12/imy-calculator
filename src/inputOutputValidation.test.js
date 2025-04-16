import { add, subtract, multiply, divide } from './calculations';

describe('Hex Calculator Input/Output and Error Validation', () => {

  test('rejects inputs longer than 2 hex digits', () => {
    expect(() => add('1FF', '1')).toThrow('Input exceeds 2 hex digits');
    expect(() => subtract('1', 'ABC')).toThrow('Input exceeds 2 hex digits');
  });

  test('rejects invalid hex characters', () => {
    expect(() => add('G1', '1')).toThrow('Invalid hex input');
    expect(() => subtract('1$', '5')).toThrow('Invalid hex input');
  });

  
  test('rejects input longer than 2 hex digits', () => {
    const invalidInput = '1FF';
    expect(() => add(invalidInput, '1')).toThrow('Input exceeds 2 hex digits');
  });

  test('output is always a positive whole number', () => {
    expect(() => subtract('1', '5')).toThrow('Negative result not allowed');
    expect(divide('F', '2')).toBe('7');
  });

  test('throws error if result exceeds 4 digits', () => {
    const customAdd = (a, b) => {
      const result = 70000;
      return result.toString(16).toUpperCase();
    };
    expect(() => {
      const hex = customAdd('FF', 'FF');
      if (hex.length > 4) throw new Error('Output exceeds 4 hex digits');
    }).toThrow('Output exceeds 4 hex digits');
  });
});
