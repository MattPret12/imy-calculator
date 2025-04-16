import { add, subtract, multiply, divide } from './calculations';

describe('Calculations Testing', () => {
  test('adds two numbers', () => {
    expect(add('1', '1')).toBe('2');
  });

  test('adds two complex numbers', () => {  
    expect(add('A', '5')).toBe('F');
    expect(add('1F', '1')).toBe('20');
  });

  test('subtracts two numbers', () => {
    expect(subtract('A', '5')).toBe('5');
    expect(subtract('10', '10')).toBe('0');
  });

  test('multiplies two hexadecimal numbers', () => {
    expect(multiply('A', '2')).toBe('14');
    expect(multiply('F', 'F')).toBe('E1');
  });

  test('divides two hexadecimal numbers', () => {
    expect(divide('A', '2')).toBe('5');
    expect(divide('10', '3')).toBe('5');
  });
});


