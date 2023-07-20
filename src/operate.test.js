import operate from './logic/operate';

describe('Testing for the operate function', () => {
  it('should sum all the numbers', () => {
    const sum = operate(2, 2, '+');
    expect(sum).toEqual('4');
  });
  it('should multiple the numbers', () => {
    const sum = operate(3, 3, 'x');
    expect(sum).toEqual('9');
  });
  it('should divide the numbers', () => {
    const sum = operate(10, 5, '÷');
    expect(sum).toEqual('2');
  });
  it('should not divide by zero', () => {
    const sum = operate(10, 0, '÷');
    expect(sum).toEqual("Can't divide by 0.");
  });
  it('should deduct from the numbers', () => {
    const sum = operate(20, 2, '-');
    expect(sum).toEqual('18');
  });
  it('should give percent fraction of the numbers', () => {
    const sum = operate(10, 100, '%');
    expect(sum).toEqual('10');
  });
});
