import { describe, expect, it } from 'vitest'
import { OPERATOR, calculate, formatValue } from '../src/utils'

describe('formatValue tests', () => {
  
  describe('when isOperatorSelector false', () => {
    const isOperatorSelected = false

    it('Should remove leading zero from input when is follow by a number', () => {
      const input = '02'
      const result = formatValue(input, isOperatorSelected)
      expect(result).toBe('2')
    }) 
    
    it('Should keep zero when it is follow by a decimal point', () => {
      const input = '0.'
      const result = formatValue(input, isOperatorSelected)
      expect(result).toBe('0.')
    }) 

    it('Should remove additional decimal points', () => {
      const input = '3.14.25'
      const result = formatValue(input, isOperatorSelected)
      expect(result).toBe('3.1425')
    })

    it('Should handle decimal points correctly when only decimal points are present', () => {
      const input = '..'
      const result = formatValue(input, isOperatorSelected)
      expect(result).toBe('.')
    })
  })
})

describe('calculate function', () => {
  it('Should correctly add two numbers', () => {
    const a = 10;
    const b = 20;
    const operator = OPERATOR.ADD;
    const result = calculate(a, b, operator);
    expect(result).toEqual(30);
  });

  it('Should correctly subtract two numbers', () => {
    const a = 20;
    const b = 10;
    const operator = OPERATOR.SUBTRACT;
    const result = calculate(a, b, operator);
    expect(result).toEqual(10);
  });

  it('Should correctly multiply two numbers', () => {
    const a = 5;
    const b = 7;
    const operator = OPERATOR.MULTIPLY;
    const result = calculate(a, b, operator);
    expect(result).toEqual(35);
  });

  it('Should correctly divide two numbers', () => {
    const a = 50;
    const b = 10;
    const operator = OPERATOR.DIVIDE;
    const result = calculate(a, b, operator);
    expect(result).toEqual(5);
  });

  it('Should throw an error if attempting to divide by zero', () => {
    const a = 10;
    const b = 0;
    const operator = OPERATOR.DIVIDE;
    expect(() => calculate(a, b, operator)).toThrowError('Can\'t divide');
  });

  it('Should throw an error if there is an overflow during calculation', () => {
    const a = Number.MAX_SAFE_INTEGER;
    const b = 2;
    const operator = OPERATOR.MULTIPLY;
    expect(() => calculate(a, b, operator)).toThrowError('Overflow');
  });

  it('Should round the result to 10 decimal places', () => {
    const a = 1;
    const b = 3;
    const operator = OPERATOR.DIVIDE;
    const result = calculate(a, b, operator);
    expect(result).toEqual(0.3333333333);
  });
});