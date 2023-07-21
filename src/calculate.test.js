import calculate from './logic/calculate';

describe('calculate', () => {
  it('should return the initial calculator state when "AC" button is pressed', () => {
    const initialState = { total: '10', next: '5', operation: '+' };
    const result = calculate(initialState, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update the next number when a digit button is pressed', () => {
    const initialState = { total: '10', next: '5', operation: '+' };
    const result = calculate(initialState, '2');
    expect(result).toEqual({
      total: '10',
      next: '52',
      operation: '+',
    });
  });

  it('should handle the "." button correctly', () => {
    const initialState = { total: '10', next: '5', operation: '+' };

    // Add decimal point when next number doesn't contain one
    let result = calculate(initialState, '.');
    expect(result).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });

    // Ignore decimal point if next number already contains one
    result = calculate(result, '.');
    expect(result).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });

    // If there is no next number, start a new one with a leading "0."
    result = calculate({ total: '10', next: null, operation: '+' }, '.');
    expect(result).toEqual({
      total: '10',
      next: '0.',
      operation: '+',
    });
  });

  it('should perform the operation when "=" button is pressed', () => {
    const initialState = { total: '10', next: '5', operation: '+' };
    const result = calculate(initialState, '=');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('should handle the "+/-" button correctly', () => {
    // Change the sign of the next number
    let result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({
      total: '10',
      next: '-5',
      operation: '+',
    });

    // Change the sign of the total number
    result = calculate({ total: '10', next: null, operation: '+' }, '+/-');
    expect(result).toEqual({
      total: '-10',
      next: null,
      operation: '+',
    });
  });

  // Add more test cases to cover other scenarios in the "calculate" function
});
